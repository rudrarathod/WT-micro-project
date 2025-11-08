# 📖 Online Notes App - Usage Guide

## Getting Started

### First Time Setup

1. **Open the Application**

   - Navigate to `http://localhost:5173` in your browser
   - You'll see an empty state with "No notes yet!" message

2. **Create Your First Note**

   - Click the "+ New Note" button in the sidebar
   - The editor panel will open

3. **Write Your Note**
   - Enter a title in the "Note Title" field (optional)
   - Type your content in the large text area below
   - Click the "💾 Save" button when done

## Basic Operations

### Creating a Note

1. Click "+ New Note" button
2. Enter title (if blank, defaults to "Untitled Note")
3. Write your content
4. Click "💾 Save"
5. Your note appears in the sidebar

### Editing a Note

1. Click on any note in the sidebar
2. The note opens in the editor
3. Make your changes
4. Click "💾 Save" to update
5. Click "Cancel" to discard changes

### Deleting a Note

1. Locate the note in the sidebar
2. Click the 🗑️ (trash) icon on the note
3. Confirm deletion in the popup
4. Note is permanently removed

### Searching Notes

1. Type in the search bar at the top of sidebar
2. Notes filter in real-time
3. Search works on both titles and content
4. Clear search to see all notes

## Tips & Tricks

### Keyboard Workflow

- Tab through fields for quick navigation
- Press Enter in title field to jump to content
- Use Ctrl+F to focus search (standard browser shortcut)

### Organization Tips

- Use consistent title formats (e.g., "Meeting - 2025-11-05")
- Start notes with keywords for easier searching
- Keep related notes with similar title prefixes
- Delete old notes regularly

### Search Tips

- Search is case-insensitive
- Partial matches work (search "meet" finds "Meeting Notes")
- Search multiple words to narrow results
- Use unique keywords in titles for quick access

## Advanced Usage

### Data Management

**Viewing Your Data:**

- Open Browser DevTools (F12)
- Go to Application → Local Storage
- Look for your domain
- Find the "notes" key

**Exporting Notes (Manual):**

1. Open Browser DevTools (F12)
2. Go to Console
3. Type: `localStorage.getItem('notes')`
4. Copy the output
5. Save to a text file

**Importing Notes (Manual):**

1. Open Browser DevTools (F12)
2. Go to Console
3. Type: `localStorage.setItem('notes', 'YOUR_DATA_HERE')`
4. Refresh the page

### Backup Strategy

**Option 1: Browser Bookmarks**

- No backup needed, just keep using same browser

**Option 2: Manual Copy**

- Periodically copy notes to external document
- Store important notes in multiple places

**Option 3: Export Data**

- Use DevTools method above
- Save JSON data externally
- Restore when needed

## Common Scenarios

### Scenario 1: Meeting Notes

```
Title: Team Meeting - Nov 5, 2025
Content:
- Discussed Q4 goals
- Action items:
  * John: Update documentation
  * Sarah: Review PR #123
- Next meeting: Nov 12
```

### Scenario 2: Quick Todo

```
Title: Shopping List
Content:
☐ Milk
☐ Bread
☐ Eggs
☐ Coffee
☑ Completed items marked with ☑
```

### Scenario 3: Code Snippet

```
Title: React useState Hook
Content:
import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>
    Click me
  </button>;
}
```

### Scenario 4: Daily Journal

```
Title: Journal - Nov 5, 2025
Content:
Today was productive. Completed the notes app project.
Learned about localStorage API and React hooks.
Tomorrow: Add more features.
```

## Troubleshooting

### Notes Not Saving?

- Check browser's localStorage quota
- Try deleting old notes
- Check console for errors (F12)
- Try different browser

### Can't Find a Note?

- Clear search bar
- Scroll through sidebar
- Check if accidentally deleted
- Try searching with different keywords

### Layout Issues?

- Try zooming in/out (Ctrl + / Ctrl -)
- Refresh the page (F5)
- Check browser window size
- Clear browser cache

### Notes Disappeared?

- Check if browser data was cleared
- Check different browser/profile
- Restore from backup if available
- localStorage might be disabled

## Keyboard Shortcuts (Browser Standard)

- `Ctrl + F` - Find in page
- `Ctrl + A` - Select all text
- `Ctrl + C` - Copy
- `Ctrl + V` - Paste
- `Ctrl + Z` - Undo
- `Ctrl + Y` - Redo
- `Tab` - Next field
- `Shift + Tab` - Previous field

## Mobile Usage

### Creating Notes on Mobile

1. Tap "+ New Note" button
2. Use on-screen keyboard
3. Tap title field to edit
4. Tap content area to write
5. Tap "💾 Save" when done

### Navigation on Mobile

- Scroll sidebar to view all notes
- Tap note to open
- Swipe/scroll in editor area
- Use browser zoom if needed

## Privacy & Security

### What's Stored

- Note titles and content
- Creation and update timestamps
- Note IDs (timestamp-based)

### What's NOT Stored

- No user account information
- No IP addresses or tracking
- No analytics or usage data
- No cookies (except localStorage)

### Data Location

- All data in browser's localStorage
- Never sent to any server
- Stays on your device
- Cleared when browser data is cleared

## Best Practices

1. **Regular Reviews**: Review notes weekly, delete old ones
2. **Consistent Format**: Use consistent title formats
3. **Clear Content**: Write clear, searchable content
4. **Backup Important**: Copy critical notes elsewhere
5. **Test Features**: Try all features to learn the app

## FAQ

**Q: How many notes can I create?**
A: Limited by browser's localStorage quota (~5-10MB), hundreds or thousands depending on note size.

**Q: Can I use this offline?**
A: Yes! Works completely offline once loaded.

**Q: Will notes sync across devices?**
A: No, currently stores data locally per browser.

**Q: Can I format text (bold, italic)?**
A: Not currently, plain text only. Future versions may include formatting.

**Q: Is my data secure?**
A: Data stored locally on your device. Not encrypted. Don't store sensitive information.

**Q: Can I share notes with others?**
A: Not directly. You can copy/paste content to share.

---

Need more help? Check FEATURES.md for technical details or README.md for setup instructions.
