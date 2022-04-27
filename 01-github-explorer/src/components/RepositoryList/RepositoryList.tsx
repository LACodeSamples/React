import {
  useState,
  useEffect
} from 'react';

import { RepositoryItem } from "../RepositoryItem/RepositoryItem";

import '../RepositoryList/repositories.scss';

type Repositoriy = {
  id: string;
  name :string;
  description :string;
  html_url :string;
}

export const RepositoryList = () => {

  const [repositories, setRepositories] = useState<Repositoriy[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setRepositories(data)
      }
      )
  }, [])

  return (
    <section className="repository-list">

      <h1>Lista de Repositórios</h1>

      <ul>
        {
          repositories.map((repository) => <RepositoryItem key={repository.id} repository={repository} />)
        }
      </ul>
    </section>
  )
}