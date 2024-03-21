

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex bg-green-500">
        {children}
        </div>
    );
}