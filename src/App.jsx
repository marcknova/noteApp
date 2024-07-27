import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import NotesPage from "./pages/NotesPage";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./services/AuthContext";
import { NotesProvider } from "./services/NoteContext";

function App() {
  return (
    <AuthProvider>
      <NotesProvider>
        <Router>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route
              path="/notes"
              element={
                <PrivateRoute>
                  <NotesPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </NotesProvider>
    </AuthProvider>
  );
}

export default App;
