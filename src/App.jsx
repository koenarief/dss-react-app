import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { ProductCreate } from "./pages/ProductCreate";
import { ProductList } from "./pages/ProductList";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProtectedLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="create" element={<ProductCreate />} />
          <Route path="list" element={<ProductList />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

