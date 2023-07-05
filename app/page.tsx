import { BsButton } from "../components/Button/BsButton";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="container">
        <BsButton btnType="button" label="Button" variant="primary" />
      </div>
    </main>
  );
}
