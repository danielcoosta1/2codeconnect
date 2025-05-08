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
  ContainerMainPublicar,
  ContainerTags,
  ImgUpload,
  InputDescricaoProjeto,
  InputNomeProjeto,
  Tags,
  UploadButton,
} from "./styles";

import imgDefault from "./assets/img-default-upload.png";

//ICONES
import iconeTrash from "./assets/icones/trash.svg";
import arrowForward from "./assets/icones/arrow_forward.svg";
import arrowUpload from "./assets/icones/arrow_upload.svg";
import iconeClose from "./assets/icones/close.svg"

const Publicar = () => {
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
            <InputNomeProjeto>
              <label htmlFor="nomeProjeto">Nome do projeto</label>
              <input id="nomeProjeto" type="text" />
            </InputNomeProjeto>
            <InputDescricaoProjeto>
              <label>Descrição</label>
              <textarea />
            </InputDescricaoProjeto>
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
