import React, { useState } from "react";
import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonButton,
} from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { enviroment } from "../../enviroment/enviroment.dev";
import { useHistory } from "react-router-dom";

const Form: React.FC = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const { updateMethod } = ApiMethods(`${enviroment.apiEndpoint}/products`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMethod(id, name, price);
    setMessage("Editado correctamente");
    setId("");
    setName("");
  };

  const handleRedirect = () => {
    history.push("/pages/List");
    window.location.reload();
  };

  return (
    <IonPage>
      <IonContent>
        <form className="Form__Container" onSubmit={handleSubmit}>
          <h2 className="Form__Title">Editar Producto</h2>
          <IonItem className="Form__Input">
            <IonLabel position="floating">ID</IonLabel>
            <IonInput
              value={id}
              onIonChange={(e) => setId(e.detail.value!)}
              required
            ></IonInput>
          </IonItem>
          <IonItem className="Form__Input">
            <IonLabel position="floating">Name</IonLabel>
            <IonInput
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
              required
            ></IonInput>
          </IonItem>
          <IonItem className="Form__Input">
            <IonLabel position="floating">Price</IonLabel>
            <IonInput
              value={price}
              onIonChange={(e) => setPrice(e.detail.value!)}
              required
            ></IonInput>
          </IonItem>
          <IonButton className="Form__Button" type="submit" expand="full">
            Editar
          </IonButton>
        </form>
        <IonButton onClick={handleRedirect} expand="full">
          Ir a la Lista
        </IonButton>
        <h1 style={{ textAlign: "center" }}>{message}</h1>
      </IonContent>
    </IonPage>
  );
};

export default Form;
