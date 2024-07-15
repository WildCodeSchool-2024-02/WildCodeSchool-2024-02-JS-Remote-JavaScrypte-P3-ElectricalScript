export default function DropdownMenu() {
  return (
    <div>
      <ul className="bg-white absolute flex flex-col justify-center p-4 gap-2 text-2xl">
        <li>En cours</li>
        <li>Annulées</li>
        <li>Completées</li>
      </ul>
    </div>
  );
}
