export const metadata = {
  title: 'Sanity Studio',
  description: 'Content management for The Learners Academy',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          * { color: white !important; }
          input, textarea, select { color: white !important; background: transparent; }
          [data-ui] { color: white !important; }
        `}</style>
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
