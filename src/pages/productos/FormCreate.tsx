import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from '@ionic/react';
import { environment } from '../../environments/enviroments.dev';
import ApiMethods from '../../commons/ApiMethods';
import { useHistory } from 'react-router-dom';

const FormCreate: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const { createMethod } = ApiMethods(`${environment.apiEndpoint}/products`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMethod(productName, price);
    setMessage('listo');
    setProductName('');
    setPrice('');
  };

  const handleRedirect = () => {
    history.push('/pages/List');
    window.location.reload();
  };

  return (
    <IonPage>
      <h1 style={{ textAlign: 'center' }}>Crear producto</h1>
      <IonContent>
        <h2 style={{ textAlign: 'center', marginTop: '50px' }}>{message}</h2>
        <form
          onSubmit={handleSubmit}
          style={{ marginTop: '50px', marginLeft: '20px', marginRight: '20px' }}
        >
          <IonItem style={{ marginBottom: '20px' }}>
            <IonLabel position="floating">Nombre: </IonLabel>
            <IonInput
              value={productName}
              onIonChange={(e) => setProductName(e.detail.value!)}
              required
            />
          </IonItem>
          <IonItem style={{ marginBottom: '20px' }}>
            <IonLabel position="floating">Precio: </IonLabel>
            <IonInput
              value={price}
              onIonChange={(e) => setPrice(e.detail.value!)}
              required
            />
          </IonItem>
          <IonButton type="submit" expand="full">
            Crear
          </IonButton>
        </form>
        <IonButton onClick={handleRedirect} expand="full">
          atras
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default FormCreate;
