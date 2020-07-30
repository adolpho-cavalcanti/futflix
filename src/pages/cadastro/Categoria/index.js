import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault/index';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/index';

function CadastroCategoria() {
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [valoresDoForm, setValoresDoForm] = useState(valoresIniciais);
    function setValue(chave, valor) {
      setValoresDoForm({
        ...valoresDoForm,
        [chave]: valor,
      })
    }
    function handleChange(e) {
      setValue(
        e.target.getAttribute('name'), 
        e.target.value
      );
    }

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {valoresDoForm.nome}</h1>

        <form onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([
            ...categorias,
            valoresDoForm
          ]);
          setValoresDoForm(valoresIniciais);
        }}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valoresDoForm.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="????"
          name="descricao"
          value={valoresDoForm.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={valoresDoForm.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valoresDoForm.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={valoresDoForm.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map( (categoria, index) => {
            return(
              <li key={categoria+index}>{categoria.nome}</li>
            )
          })}
        </ul>

        <Link to="/">
          Ir para a Home 
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;