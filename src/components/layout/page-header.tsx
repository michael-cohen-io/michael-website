export default function PageHeader({ title }: { title: string }) {
  return (
    <>
      <div className="pt-0 w-full max-w-6xl px-1 xl:px-0">
        <h1 className="text-center font-display font-light text-4xl">
          {title}
        </h1>
      </div>
    </>
  );
}
