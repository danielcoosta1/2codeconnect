import { useEffect, useRef, useState } from "react";
import ContainerMain from "../../components/ContainerMain";
import usePublicacao from "../../hooks/usePublicacao";

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
  LimparTags,
  Tag,
  Tags,
  TituloTags,
  UploadButton,
} from "./styles";

import imgDefault from "./assets/img-default-upload.png";

// Ícones
import iconeClose from "./assets/icones/close.svg";
import arrowUpload from "./assets/icones/arrow_upload.svg";
import { AiOutlineClear } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Publicar = () => {
  const {
    imagem,

    nomeArquivo,
    nome,
    descricao,
    tags,
    tagInput,
    atualizarCampo,
    removerImagem,
    adicionarTag,
    removerTag,
    limparTags,
    adicionarPublicacao,
    limparPublicacao,
  } = usePublicacao();

  const inputRef = useRef();
  const [erroTag, setErroTag] = useState("");
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    fetch("/mocks/tags.json")
      .then((res) => res.json())
      .then((data) => setAllTags(data))
      .catch((err) => console.error("Erro ao carregar as tags:", err));
  }, []);

  const lidarComUpload = (e) => {
    const arquivo = e.target.files[0];
    if (!arquivo) return;

    const tiposPermitidos = ["image/jpeg", "image/png", "image/jpg"];
    const tamanhoMaximo = 5 * 1024 * 1024;

    if (!tiposPermitidos.includes(arquivo.type)) {
      alert("Formato inválido. Use JPEG ou PNG.");
      return;
    }

    if (arquivo.size > tamanhoMaximo) {
      alert("Arquivo muito grande. Máximo 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result; // string "data:image/png;base64,iVBORw0KGgoAAAANS..."
      atualizarCampo("imagem", base64); // salva no contexto
      atualizarCampo("nomeArquivo", arquivo.name);
    };
    reader.readAsDataURL(arquivo);
  };

  const lidarComKeyDown = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();
    const novaTag = tagInput.trim();

    if (!novaTag) return setErroTag("A tag não pode estar vazia.");
    if (tags && tags.includes(novaTag))
      return setErroTag("Essa tag já foi adicionada.");
    if (tags.length >= 4)
      return setErroTag("Você só pode adicionar até 4 tags.");
    if (!allTags.includes(novaTag)) return setErroTag("Essa tag não é válida.");

    adicionarTag(novaTag);
    setErroTag("");
  };

  const handlePublicar = () => {
    if (!nome || !descricao || !imagem) {
      alert("Preencha todos os campos antes de publicar.");
      return;
    }

    const novaPublicacao = {
      nome,
      descricao,
      imagem,
      nomeArquivo,
      tags,
    };

    adicionarPublicacao(novaPublicacao);
    

    limparPublicacao();
    alert("Publicação realizada com sucesso!");
  };

  return (
    <ContainerMain>
      <ContainerMainPublicar>
        <ContainerEsquerdo>
          <ContainerImgUpload>
            <ImgUpload src={imagem || imgDefault} />
          </ContainerImgUpload>
          <ContainerBtInfo>
            <UploadButton onClick={() => inputRef.current.click()}>
              <p>Carregar Imagem</p>
              <img src={arrowUpload} alt="Ícone upload" />
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={lidarComUpload}
                style={{ display: "none" }}
              />
            </UploadButton>

            {imagem && (
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
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => atualizarCampo("nome", e.target.value)}
              />
            </ContainerInputNome>

            <ContainerInputDescricao>
              <label htmlFor="descricao">Descrição do projeto</label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => atualizarCampo("descricao", e.target.value)}
              />
            </ContainerInputDescricao>
          </ContainerInfoProjeto>

          <ContainerTags>
            <TituloTags>Tags</TituloTags>
            <input
              type="text"
              placeholder="Digite e pressione Enter"
              value={tagInput || ""}
              onChange={(e) => atualizarCampo("tagInput", e.target.value)}
              onKeyDown={lidarComKeyDown}
            />
            {erroTag && <p style={{ color: "red" }}>{erroTag}</p>}
            {tags?.length > 0 && (
              <>
                <Tags>
                  {tags.map((tag, index) => (
                    <Tag key={index}>
                      {tag}
                      <IoMdClose onClick={() => removerTag(tag)} />
                    </Tag>
                  ))}
                </Tags>
                <LimparTags onClick={limparTags}>
                  <AiOutlineClear />
                  Limpar todas
                </LimparTags>
              </>
            )}
          </ContainerTags>

          <ContainerBotoes>
            <BotaoDescartar onClick={limparPublicacao}>
              Descartar
            </BotaoDescartar>
            <BotaoPublicar onClick={handlePublicar}>Publicar</BotaoPublicar>
          </ContainerBotoes>
        </ContainerDireito>
      </ContainerMainPublicar>
    </ContainerMain>
  );
};

export default Publicar;
