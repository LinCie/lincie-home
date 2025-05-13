function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center p-5">
      <small className="text-xs">©{year} LinCie. All rights reserved.</small>
    </footer>
  );
}

export { Footer };
