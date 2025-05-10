import ContainerMain from "../../components/ContainerMain";

import {
  BotaoDescartar,
  BotaoPublicar,
  ContainerBotoes,
  ContainerBtInfo,
  ContainerDireito,
  ContainerEsquerdo,
  ContainerImgUpload,
  ContainerInfoImgUpload,
  ContainerInfoProjeto,
  ContainerInputDescricao,
  ContainerInputNome,
  ContainerMainPublicar,
  ContainerTags,
  ImgUpload,
  Tags,
  UploadButton,
} from "./styles";

import imgDefault from "./assets/img-default-upload.png";



//ICONES
import iconeTrash from "./assets/icones/trash.svg";
import arrowForward from "./assets/icones/arrow_forward.svg";
import arrowUpload from "./assets/icones/arrow_upload.svg";
import iconeClose from "./assets/icones/close.svg";
import { useEffect, useRef, useState } from "react";

const Publicar = () => {
  //CONTEXTO IMAGEM
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [nomeArquivo, setNomeArquivo] = useState("");
  const inputRef = useRef();

  const lidarComUpload = (e) => {
    const arquivo = e.target.files[0];

    if (!arquivo) return;

    const tiposPermitidos = ["image/jpeg", "image/png", "image/jpg"];

    if (!tiposPermitidos.includes(arquivo.type)) {
      alert("Formato inválido. Use JPEG ou PNG.");
      return;
    }

    // Verifica o tamanho do arquivo (limite de 5MB)
    const tamanhoMaximo = 5 * 1024 * 1024; // 5MB
    if (arquivo.size > tamanhoMaximo) {
      alert("Arquivo muito grande. Máximo 5MB.");
      return;
    }

    setImagemSelecionada(URL.createObjectURL(arquivo));
    setNomeArquivo(arquivo.name);
  };

  const removerImagem = () => {
    setImagemSelecionada(null);
    setNomeArquivo("");
    inputRef.current.value = ""; // limpa o input file
  };

  //CONTEXTO - INFORMAÇÕES DO PROJETO(NOME E DESCRIÇÃO)
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  //CONTEXTO TAG
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    fetch("/mocks/tags.json")
      .then((res) => res.json())
      .then((data) => setAllTags(data))
      .catch((err) => console.error("Erro ao carregar as tags:", err));
  }, []);

  const [erroTag, setErroTag] = useState("");

  const lidarComKeyDown = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault(); // Evita quebra de linha

    const novaTag = tagInput.trim();

    if (!novaTag) {
      setErroTag("A tag não pode estar vazia.");
      return;
    }

    if (tags.includes(novaTag)) {
      setErroTag("Essa tag já foi adicionada.");
      return;
    }

    if (tags.length >= 4) {
      setErroTag("Você só pode adicionar até 4 tags.");
      return;
    }

    if (!allTags.includes(novaTag)) {
      setErroTag("Essa tag não é válida.");
      return;
    }

    setTags((prev) => [...prev, novaTag]);
    setTagInput("");
    setErroTag(""); // limpa erro
  };

  ///////

  return (
    <ContainerMain>
      <ContainerMainPublicar>
        <ContainerEsquerdo>
          <ContainerImgUpload>
            <ImgUpload src={imagemSelecionada || imgDefault} />
          </ContainerImgUpload>
          <ContainerBtInfo>
            <UploadButton onClick={() => inputRef.current.click()}>
              <p>Carregar Imagem</p>
              <img src={arrowUpload} />
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={lidarComUpload}
                style={{ display: "none" }}
              />
            </UploadButton>

            {imagemSelecionada && (
              <ContainerInfoImgUpload>
                <p>{nomeArquivo}</p>
                <img
                  src={iconeClose}
                  alt="Fechar imagem"
                  onClick={removerImagem}
                  style={{ cursor: "pointer" }}
                />
              </ContainerInfoImgUpload>
            )}
          </ContainerBtInfo>
        </ContainerEsquerdo>
        <ContainerDireito>
          <h2>Novo projeto</h2>
          <ContainerInfoProjeto>
            <ContainerInputNome>
              <label htmlFor="nome">Nome do projeto</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </ContainerInputNome>
            <ContainerInputDescricao>
              <label htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
            </ContainerInputDescricao>
          </ContainerInfoProjeto>
          <ContainerTags>
            <h2>Tags</h2>
            <input
              type="text"
              id="tags"
              value={tagInput}
              required
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={lidarComKeyDown}
            />

            {erroTag && (
              <p style={{ color: "red", marginTop: "4px" }}>{erroTag}</p>
            )}

            {tags.length > 0 && (
              <Tags>
                {tags.map((tag, index) => (
                  <span key={index}>
                    {tag}
                    <button
                      onClick={() => setTags(tags.filter((t) => t !== tag))}
                      style={{ marginLeft: "4px", cursor: "pointer" }}
                    >
                      x
                    </button>
                  </span>
                ))}
              </Tags>
            )}
          </ContainerTags>

          <ContainerBotoes>
            <BotaoDescartar>
              <p>Descartar</p>
              <img src={iconeTrash} alt="ícone de lixeira" />
            </BotaoDescartar>
            <BotaoPublicar>
              <p>Publicar</p>
              <img
                src={arrowForward}
                alt="ícone de carregamento(flesha para cima)"
              />
            </BotaoPublicar>
          </ContainerBotoes>
        </ContainerDireito>
      </ContainerMainPublicar>
    </ContainerMain>
  );
};

export default Publicar;
