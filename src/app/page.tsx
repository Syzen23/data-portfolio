export default function Home() {
  const endpoints = [
    {
      method: "GET",
      path: "/api/projects",
      description: "Returns all projects sorted by priority",
    },
    {
      method: "GET",
      path: "/api/projects/[slug]",
      description: "Returns a single project by slug",
    },
    {
      method: "GET",
      path: "/api/certificates",
      description: "Returns all certificates",
    },
    {
      method: "GET",
      path: "/api/certificates/[slug]",
      description: "Returns a single certificate by slug",
    },
    {
      method: "GET",
      path: "/api/gallery",
      description: "Returns all gallery items",
    },
    {
      method: "GET",
      path: "/api/creations",
      description: "Returns all creations",
    },
    {
      method: "GET",
      path: "/api/creations?platform=tiktok",
      description: "Returns TikTok creations only",
    },
    {
      method: "GET",
      path: "/api/creations?platform=instagram",
      description: "Returns Instagram creations only",
    },
  ];

  return (
    <main
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: "#e4e4e7",
        backgroundColor: "#09090b",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "1.75rem",
          fontWeight: 700,
          marginBottom: "0.25rem",
        }}
      >
        data-portfolio
      </h1>
      <p
        style={{
          color: "#a1a1aa",
          fontSize: "0.95rem",
          marginBottom: "2.5rem",
        }}
      >
        Headless Portfolio Data Service — V1
      </p>

      <h2
        style={{
          fontSize: "1.1rem",
          fontWeight: 600,
          marginBottom: "1rem",
          color: "#a1a1aa",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        Available Endpoints
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {endpoints.map((ep) => (
          <a
            key={ep.path}
            href={ep.path}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              borderRadius: "0.5rem",
              textDecoration: "none",
              color: "#e4e4e7",
              fontSize: "0.875rem",
              transition: "border-color 0.15s",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#22c55e",
                backgroundColor: "#052e16",
                padding: "0.15rem 0.5rem",
                borderRadius: "0.25rem",
                flexShrink: 0,
              }}
            >
              {ep.method}
            </span>
            <code
              style={{
                fontFamily: "monospace",
                fontSize: "0.85rem",
                color: "#60a5fa",
                flexShrink: 0,
              }}
            >
              {ep.path}
            </code>
            <span
              style={{
                color: "#71717a",
                marginLeft: "auto",
                fontSize: "0.8rem",
                textAlign: "right",
              }}
            >
              {ep.description}
            </span>
          </a>
        ))}
      </div>

      <p
        style={{
          marginTop: "2.5rem",
          fontSize: "0.8rem",
          color: "#52525b",
          textAlign: "center",
        }}
      >
        All endpoints return{" "}
        <code style={{ color: "#71717a" }}>
          {"{ success: boolean, data | message }"}
        </code>
      </p>
    </main>
  );
}
