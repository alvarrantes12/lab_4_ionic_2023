import React, { useState } from "react";
import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonButton
} from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { enviroment } from "../../enviroments/enviroment.dev";
import { useHistory } from "react-router-dom";

const FormNew: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const { refetch } = ApiMethods(`${enviroment.apiEndpoint}/products`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch(name, price);
    setMessage("¡Creado correctamente!");
    setName("");
    setPrice("");
  };

  const handleRedirect = () => {
    history.push("/pages/List");
    window.location.reload();
  };

  return (
    <IonPage>
      <IonContent>
        <h1
          style={{
            textAlign: "center",
            fontSize: "24px",
            marginTop: "20px",
            marginBottom: "40px"
          }}
        >
          Crear Producto
        </h1>
        <h1>{message}</h1>
        <form
          onSubmit={handleSubmit}
          style={{ marginTop: "50px", marginLeft: "20px", marginRight: "10px" }}
        >
          <IonItem style={{ marginButton: "20px" }}>
            <IonLabel position="floating">Nombre</IonLabel>
            <IonInput
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
              required
            ></IonInput>
          </IonItem>
          <IonItem style={{ marginButton: "20px" }}>
            <IonLabel position="floating">Precio</IonLabel>
            <IonInput
              value={price}
              onIonChange={(e) => setPrice(e.detail.value!)}
              required
            ></IonInput>
          </IonItem>
          <IonButton type="submit" expand="full">
            Crear
          </IonButton>
        </form>
        <IonButton onClick={handleRedirect} expand="full">
          Ir a la lista de productos
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default FormNew;