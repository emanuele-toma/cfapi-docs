---
title: Verifica Codice Fiscale
description: API per verificare la validità di un codice fiscale tramite l'Agenzia delle Entrate.
---

# Verifica Codice Fiscale

Questa API permette di verificare la validità di un **codice fiscale** interrogando i dati ufficiali dell'Agenzia delle Entrate.

## 🔗 Endpoint

```http
GET /api/v1/verifica/codice-fiscale/{codiceFiscale}
```

## 🔑 Autenticazione

Questa API **richiede autenticazione** tramite una **API Key**. La chiave deve essere inviata nell'intestazione della richiesta.

**Esempio di invio dell'API Key:**

```http
Authorization: Bearer <API_KEY>
```

## 📥 Parametri della richiesta

| Nome            | Tipo     | Obbligatorio | Descrizione                     |
| --------------- | -------- | ------------ | ------------------------------- |
| `codiceFiscale` | `string` | ✅ Sì        | Il codice fiscale da verificare |

### 📌 Esempio di richiesta con **cURL**

```sh
curl -X GET "https://api.codicefiscale.dev/api/v1/verifica/codice-fiscale/ABCDEF12G34H567I" \
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

## ❌ Possibili errori

| Codice | Messaggio               | Descrizione                                        |
| ------ | ----------------------- | -------------------------------------------------- |
| `500`  | `"Failed to verify CF"` | Errore nel contattare il servizio di verifica      |
| `401`  | `"Unauthorized"`        | API Key mancante o non valida                      |
| `400`  | `"Bad Request"`         | I parametri della query sono mancanti o malformati |

## 💡 Esempi di utilizzo

### 🛠 **Esempio con JavaScript (fetch)**

```javascript
fetch(
  "https://api.codicefiscale.dev/api/v1/verifica/codice-fiscale/ABCDEF12G34H567I",
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

url = "https://api.codicefiscale.dev/api/v1/verifica/codice-fiscale/ABCDEF12G34H567I"
headers = {
    "Authorization": "Bearer <API_KEY>"
}

response = requests.get(url, headers=headers)
print(response.json())
```
