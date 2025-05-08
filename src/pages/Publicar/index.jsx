import ContainerMain from "../../components/ContainerMain";
import {
  ContainerDireito,
  ContainerEsquerdo,
  ContainerImgUpload,
  ContainerInfoImgUpload,
  ContainerInfoProjeto,
  ContainerMainPublicar,
  ContainerTags,
  ImgUpload,
  Tags,
  UploadButton,
} from "./styles";
import imgDefault from "./assets/img-default-upload.png"
const Publicar = () => {
  return (
    <ContainerMain>
      <ContainerMainPublicar>
        <ContainerEsquerdo>
          <ContainerImgUpload>
            <ImgUpload src={imgDefault} />
          </ContainerImgUpload>
          <UploadButton>Carregar Imagem</UploadButton>
          <ContainerInfoImgUpload>
            <p>image_projeto.png</p>
            <img />
          </ContainerInfoImgUpload>
        </ContainerEsquerdo>
        <ContainerDireito>
          <h2>Novo projeto</h2>
          <ContainerInfoProjeto>
            <label>Nome do projeto</label>
            <input type="text" />
            <label>Descrição</label>
            <textarea />
          </ContainerInfoProjeto>
          <ContainerTags>
            <h2>Tags</h2>
            <input type="text" />
            <Tags></Tags>
          </ContainerTags>
        </ContainerDireito>
      </ContainerMainPublicar>
    </ContainerMain>
  );
};

export default Publicar;
