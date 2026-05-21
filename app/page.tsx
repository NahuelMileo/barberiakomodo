// import Nav from "@/components/Nav";
// import Hero from "@/components/Hero";
// import Services from "@/components/Services";
// import About from "@/components/About";
// import Gallery from "@/components/Gallery";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// export default function Page() {
//   return (
//     <main id="home">
//       <Nav />
//       <Hero />
//       <Services />
//       <About />
//       <Gallery />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        color: "#f5f5f5",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", letterSpacing: "0.05em" }}>
        Sitio en mantenimiento
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#aaa", maxWidth: "400px" }}>
        Estamos trabajando para volver pronto. Gracias por tu paciencia.
      </p>
    </main>
  );
}
