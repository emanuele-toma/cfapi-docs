---
title: Verifica Persona Fiscale
description: API per verificare la validità di una persona attraverso il codice fiscale e i suoi dati anagrafici, utilizzando il servizio dell'Agenzia delle Entrate.
---

# Verifica Persona Fiscale

Questa API consente di verificare la validità di una persona utilizzando il **codice fiscale** e i relativi dati anagrafici. Viene effettuato un controllo tramite l'Agenzia delle Entrate, con una gestione del **captcha** per autenticare la richiesta.

## 🔗 Endpoint

```http
GET /api/v1/verifica/persona/:codiceFiscale
```

## 🔑 Autenticazione

Questa API **richiede autenticazione** tramite una **API Key**. La chiave deve essere inviata nell'intestazione della richiesta.

**Esempio di invio dell'API Key:**

```http
Authorization: Bearer <API_KEY>
```

## 📥 Parametri della richiesta

### **Parametri nel percorso (`param`)**

| Nome            | Tipo     | Obbligatorio | Descrizione                                   |
| --------------- | -------- | ------------ | --------------------------------------------- |
| `codiceFiscale` | `string` | ✅ Sì        | Il codice fiscale della persona da verificare |

### **Parametri nella query (`query`)**

| Nome          | Tipo     | Obbligatorio | Descrizione                                               |
| ------------- | -------- | ------------ | --------------------------------------------------------- |
| `cognome`     | `string` | ✅ Sì        | Il cognome della persona                                  |
| `nome`        | `string` | ✅ Sì        | Il nome della persona                                     |
| `dataNascita` | `string` | ✅ Sì        | La data di nascita della persona (formato YYYY-MM-DD)     |
| `provincia`   | `string` | ✅ Sì        | La provincia di nascita                                   |
| `comune`      | `string` | ✅ Sì        | Il comune di nascita                                      |
| `sesso`       | `string` | ✅ Sì        | Il sesso della persona (`M` per maschio, `F` per femmina) |

### 📌 Esempio di richiesta con **cURL**

```sh
curl -X GET "https://api.tuosito.com/api/v1/verifica/persona/ABCDEF12G34H567I?cognome=Rossi&nome=Giovanni&dataNascita=1990-01-01&provincia=RM&comune=Roma&sesso=M" \
     -H "Authorization: Bearer <API_KEY>"
```

## 📤 Risposta

### ✅ **Esempio di risposta (200 OK)**

```json
{
  "cf": "ABCDEF12G34H567I",
  "isValid": true
}
```

### ❌ **Esempio di risposta (500 Error)**

```json
{
  "error": "Failed to verify CF"
}
```

## ❌ Possibili errori

| Codice | Messaggio               | Descrizione                                        |
| ------ | ----------------------- | -------------------------------------------------- |
| `500`  | `"Failed to verify CF"` | Errore nel conttattare il servizio di verifica     |
| `401`  | `"Unauthorized"`        | API Key mancante o non valida                      |
| `400`  | `"Bad Request"`         | I parametri della query sono mancanti o malformati |

## 💡 Esempi di utilizzo

### 🛠 **Esempio con JavaScript (fetch)**

```javascript
fetch(
  "https://api.tuosito.com/api/v1/verifica/persona/ABCDEF12G34H567I?cognome=Rossi&nome=Giovanni&dataNascita=1990-01-01&provincia=RM&comune=Roma&sesso=M",
  {
    headers: {
      Authorization: "Bearer <API_KEY>",
    },
  }
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Errore:", error));
```

### 🛠 **Esempio con Python (requests)**

```python
import requests

url = "https://api.tuosito.com/api/v1/verifica/persona/ABCDEF12G34H567I"
params = {
    "cognome": "Rossi",
    "nome": "Giovanni",
    "dataNascita": "1990-01-01",
    "provincia": "RM",
    "comune": "Roma",
    "sesso": "M"
}
headers = {
    "Authorization": "Bearer <API_KEY>"
}

response = requests.get(url, headers=headers, params=params)
print(response.json())
```
