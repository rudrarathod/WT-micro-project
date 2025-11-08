# 📝 Online Notes App

A modern, feature-rich online notes application built with React, TypeScript, and Vite. This app allows users to create, edit, delete, and search through notes with persistent local storage.

## ✨ Features

- **Create Notes**: Add new notes with custom titles and content
- **Edit Notes**: Modify existing notes seamlessly
- **Delete Notes**: Remove unwanted notes with confirmation
- **Search**: Quickly find notes by searching titles or content
- **Local Storage**: All notes are automatically saved to browser's local storage
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations
- **Real-time Updates**: Notes are saved and updated instantly

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:

```bash
cd micro-project
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 How to Use

1. **Create a Note**: Click the "+ New Note" button in the sidebar
2. **Enter Title**: Add a title for your note (optional - defaults to "Untitled Note")
3. **Write Content**: Type your note content in the text area
4. **Save**: Click the "💾 Save" button to save your note
5. **Search**: Use the search bar to filter notes by title or content
6. **Edit**: Click on any note in the sidebar to edit it
7. **Delete**: Click the 🗑️ icon on a note to delete it

## 🎨 Design Features

- **Purple Gradient Theme**: Eye-catching purple gradient design
- **Smooth Animations**: Hover effects and transitions
- **Clean Layout**: Sidebar navigation with main editor area
- **Emoji Icons**: Fun and intuitive emoji-based icons
- **Responsive**: Adapts to different screen sizes

## 🔧 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **LocalStorage API** - Data persistence

## 📦 Project Structure

```
micro-project/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles
│   └── assets/          # Static assets
├── public/              # Public assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 💾 Data Storage

Notes are stored in the browser's localStorage, meaning:

- Notes persist across browser sessions
- Data is stored locally on your device
- No server or internet connection required
- Clearing browser data will delete notes

## 🌟 Future Enhancements

Potential features for future versions:

- Color-coded notes
- Tags and categories
- Rich text formatting
- Export notes to PDF/Text
- Cloud synchronization
- Dark mode toggle
- Note sharing
- Markdown support

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

Built with ❤️ using React + TypeScript + Vite
