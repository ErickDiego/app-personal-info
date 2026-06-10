export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 dark:bg-black text-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-400 mb-2">
          © {currentYear} Erick Neculhueque. Todos los derechos reservados.
        </p>
        <p className="text-gray-500 text-sm">
          Diseñado y desarrollado con React y Next.js
        </p>
      </div>
    </footer>
  );
}
