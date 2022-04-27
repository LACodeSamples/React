

type RepositoryItemProps = {
  repository : {
    name :string;
    description :string;
    html_url :string;
  }
}

export const RepositoryItem = ({repository} : RepositoryItemProps ) => {
  return (
    <li>
    <strong>{repository.name ?? "nome não definido"}</strong>
    <p>{repository.description ?? "descrição não definida"}</p>

    <a href={repository.html_url ?? '#'}>Acessar Repositório</a>
  </li>
  )
}