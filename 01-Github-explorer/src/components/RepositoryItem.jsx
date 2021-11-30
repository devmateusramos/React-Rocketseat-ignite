export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "Nome default"}</strong>
      <p>Forms in React</p>

      <a href={props.repository.link}>Acessar repositório</a>
    </li>
  );
}
