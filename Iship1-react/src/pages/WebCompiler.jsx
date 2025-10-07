import React, { useState, useEffect, useRef } from 'react';
import Editor from "@monaco-editor/react";

// Utility Components for Icons (assumes Font Awesome is available)
const HtmlIcon = () => <i className="fa-brands fa-html5"></i>;
const CssIcon = () => <i className="fa-brands fa-css3-alt"></i>;
const JsIcon = () => <i className="fa-brands fa-js"></i>;
const PlayIcon = () => <i className="fa-solid fa-play"></i>;

const WebCompiler = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const outputRef = useRef(null);

  useEffect(() => {
    // Debounce to prevent excessive updates while typing
    const handler = setTimeout(() => {
      if (!outputRef.current) return;
      
      const output = outputRef.current.contentDocument;
      
      // CSS injected into the iframe to ensure it behaves like a full browser screen
      const viewportFillCSS = `
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: auto;
        }
      `;

      // Construct the final HTML document
      const fullCode = `
        <html>
          <head>
            <style>
              ${viewportFillCSS}
              ${cssCode}
            </style>
          </head>
          <body>
            ${htmlCode}
            <script>${jsCode}</script>
          </body>
        </html>
      `;

      output.open();
      output.write(fullCode);
      output.close();
    }, 300);

    return () => clearTimeout(handler);
  }, [htmlCode, cssCode, jsCode]);

  // --- Inline Styles (Moved from CSS file to prevent compilation error) ---
  const styles = {
    // Main container: Stacks rows vertically, fills viewport
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      padding: '10px',
      gap: '10px',
      backgroundColor: '#282c34',
      color: '#fff',
    },
    // Top Row: Fixed height for editors, aligns editors horizontally
    editorRow: {
      display: 'flex',
      gap: '10px',
      height: '35vh', /* 35% of viewport height for editors */
      minHeight: '400px',
    },
    // Individual Editor Group: Stacks label/textarea vertically, fills horizontal space
    editorGroup: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      backgroundColor: '#1e1e1e',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      border: '1px solid #3c3c3c',
    },
    // Label Style
    label: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#000',
      color: '#00f2fe',
      padding: '8px 12px',
      fontSize: '14px',
      fontWeight: '600',
      borderBottom: '1px solid #00f2fe',
    },
    // Textarea Style
    textarea: {
      flex: 1,
      backgroundColor: '#1e1e1e',
      color: '#d4d4d4',
      padding: '15px',
      border: 'none',
      outline: 'none',
      fontSize: '15px',
      resize: 'none',
      fontFamily: 'monospace',
    },
    // Bottom Row: Takes all remaining vertical space
    outputPanel: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1, /* Takes ALL remaining vertical space */
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      border: '1px solid #3c3c3c',
      minHeight: '100vh',
    },
    iframe: {
      flex: 1,
      width: '100%',
      border: 'none',
      backgroundColor: '#fff',
    }
  };
  // --- End of Inline Styles ---

  return (
    <div style={styles.container}>
      {/* Top Row: Three Editors */}
      <div style={styles.editorRow}>
        <div style={styles.editorGroup}>
          <label style={styles.label}><HtmlIcon /> HTML</label>
          <textarea 
            placeholder="Write HTML here..." 
            spellCheck="false" 
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            style={styles.textarea}
            
          ></textarea>
        </div>

        <div style={styles.editorGroup}>
          <label style={styles.label}><CssIcon /> CSS</label>
          <textarea 
            placeholder="Write CSS here..." 
            spellCheck="false" 
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            style={styles.textarea}
          ></textarea>
        </div>

        <div style={styles.editorGroup}>
          <label style={styles.label}><JsIcon /> JavaScript</label>
          <textarea 
            placeholder="Write JavaScript here..." 
            spellCheck="false" 
            value={jsCode}
            onChange={(e) => setJsCode(e.target.value)}
            style={styles.textarea}
          ></textarea>
        </div>
      </div>

      {/* Bottom Row: Output Panel */}
      <div style={styles.outputPanel}>
        <label style={{...styles.label, borderBottom: 'none'}}>
          <PlayIcon /> Output
        </label>
        <iframe 
          title="Code Output"
          ref={outputRef}
          style={styles.iframe}
        />
      </div>
    </div>
  );
};

export default WebCompiler;
