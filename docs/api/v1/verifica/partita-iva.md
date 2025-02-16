---
title: Verifica Partita IVA
description: API per verificare la validità di una **Partita IVA** tramite il servizio europeo.
---

# Verifica Partita IVA

Questa API permette di verificare la validità di una **Partita IVA** interrogando il sistema ufficiale di verifica dell'Unione Europea.

## 🔗 Endpoint

```http
GET /api/v1/verifica/partita-iva/:partitaIva
```

## 🔑 Autenticazione

Questa API **non richiede autenticazione**.

## 📥 Parametri della richiesta

### **Parametri nel percorso (`param`)**

| Nome         | Tipo     | Obbligatorio | Descrizione                  |
| ------------ | -------- | ------------ | ---------------------------- |
| `partitaIva` | `string` | ✅ Sì        | La partita IVA da verificare |

### 📌 Esempio di richiesta con **cURL**

```sh
curl -X GET "https://api.tuosito.com/api/v1/verifica/partita-iva/IT12345678901"
```

## 📤 Risposta

### ✅ **Esempio di risposta (200 OK)**

```json
{
  "isValid": true,
  "name": "Azienda Esempio Srl",
  "address": "Via Esempio, 123, Milano"
}
```

### ❌ **Esempio di risposta (500 Error)**

```json
{
  "error": "Failed to verify Partita IVA"
}
```

## ❌ Possibili errori

| Codice | Messaggio                        | Descrizione                                  |
| ------ | -------------------------------- | -------------------------------------------- |
| `500`  | `"Failed to verify Partita IVA"` | Errore nel verificare la partita IVA         |
| `401`  | `"Unauthorized"`                 | API Key mancante o non valida                |
| `400`  | `"Bad Request"`                  | Parametro `partitaIva` mancante o malformato |

## 💡 Esempi di utilizzo

### 🛠 **Esempio con JavaScript (fetch)**

```javascript
fetch("https://api.tuosito.com/api/v1/verifica/partita-iva/IT12345678901")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Errore:", error));
```

### 🛠 **Esempio con Python (requests)**

```python
import requests

url = "https://api.tuosito.com/api/v1/verifica/partita-iva/IT12345678901"

response = requests.get(url)
print(response.json())
```
