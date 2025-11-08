import { useState, useEffect } from "react";
import "./App.css";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes).map((note: Note) => ({
        ...note,
        createdAt: new Date(note.createdAt),
        updatedAt: new Date(note.updatedAt),
      }));
      setNotes(parsedNotes);
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  const createNewNote = () => {
    setIsCreating(true);
    setSelectedNote(null);
    setTitle("");
    setContent("");
  };

  const saveNote = () => {
    if (!title.trim() && !content.trim()) return;

    if (selectedNote) {
      // Update existing note
      setNotes(
        notes.map((note) =>
          note.id === selectedNote.id
            ? { ...note, title, content, updatedAt: new Date() }
            : note
        )
      );
    } else {
      // Create new note
      const newNote: Note = {
        id: Date.now().toString(),
        title: title || "Untitled Note",
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setNotes([newNote, ...notes]);
    }

    setIsCreating(false);
    setSelectedNote(null);
    setTitle("");
    setContent("");
  };

  const deleteNote = (id: string) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setNotes(notes.filter((note) => note.id !== id));
      if (selectedNote?.id === id) {
        setSelectedNote(null);
        setIsCreating(false);
      }
    }
  };

  const editNote = (note: Note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
    setIsCreating(true);
  };

  const cancelEdit = () => {
    setIsCreating(false);
    setSelectedNote(null);
    setTitle("");
    setContent("");
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>📝 My Notes</h1>
          <button className="btn-new" onClick={createNewNote}>
            + New Note
          </button>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="notes-list">
          {filteredNotes.length === 0 ? (
            <div className="empty-state">
              <p>No notes yet!</p>
              <p>Create your first note to get started.</p>
            </div>
          ) : (
            filteredNotes.map((note) => (
              <div
                key={note.id}
                className={`note-item ${
                  selectedNote?.id === note.id ? "active" : ""
                }`}
                onClick={() => editNote(note)}
              >
                <div className="note-item-header">
                  <h3>{note.title}</h3>
                  <button
                    className="btn-delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNote(note.id);
                    }}
                  >
                    🗑️
                  </button>
                </div>
                <p className="note-preview">{note.content}</p>
                <span className="note-date">{formatDate(note.updatedAt)}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="editor">
        {isCreating ? (
          <>
            <div className="editor-header">
              <input
                type="text"
                className="title-input"
                placeholder="Note Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
              <div className="editor-actions">
                <button className="btn-cancel" onClick={cancelEdit}>
                  Cancel
                </button>
                <button className="btn-save" onClick={saveNote}>
                  💾 Save
                </button>
              </div>
            </div>
            <textarea
              className="content-textarea"
              placeholder="Start typing your note..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </>
        ) : (
          <div className="empty-editor">
            <div className="empty-icon">📋</div>
            <h2>Select a note to view</h2>
            <p>Or create a new note to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
