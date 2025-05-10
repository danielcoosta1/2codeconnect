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
import { useRef, useState } from "react";

const Publicar = () => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [nomeArquivo, setNomeArquivo] = useState("");
  const inputRef = useRef();

  const lidarComUpload = (e) => {
    const arquivo = event.target.files[0];

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
  return (
    <ContainerMain>
      <ContainerMainPublicar>
        <ContainerEsquerdo>
          <ContainerImgUpload>
            <ImgUpload src={imgDefault} />
          </ContainerImgUpload>
          <ContainerBtInfo>
            <UploadButton>
              <p>Carregar Imagem</p>
              <img src={arrowUpload} />
            </UploadButton>
            <ContainerInfoImgUpload>
              <p>image_projeto.png</p>
              <img src={iconeClose} />
            </ContainerInfoImgUpload>
          </ContainerBtInfo>
        </ContainerEsquerdo>
        <ContainerDireito>
          <h2>Novo projeto</h2>
          <ContainerInfoProjeto>
            <ContainerInputNome>
              <label htmlFor="nomeProjeto">Nome do projeto</label>
              <input id="nomeProjeto" type="text" />
            </ContainerInputNome>
            <ContainerInputDescricao>
              <label>Descrição</label>
              <textarea />
            </ContainerInputDescricao>
          </ContainerInfoProjeto>
          <ContainerTags>
            <h2>Tags</h2>
            <input type="text" />
            <Tags></Tags>
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
