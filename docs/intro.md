---
title: Introduzione alle API
description: Scopri come utilizzare le API di codicefiscale.dev per la verifica di codici fiscali e partite IVA.
---

# Introduzione alle API

Benvenuto nella documentazione delle API di **codicefiscale.dev**!  
Le nostre API ti permettono di verificare **codici fiscali** e **partite IVA** in modo semplice e veloce, direttamente con i dati ufficiali dell’Agenzia delle Entrate.

## 🚀 Cosa puoi fare con le API?

Le API offrono le seguenti funzionalità:

- ✅ **Verifica di un codice fiscale**  
  Controlla se un codice fiscale è valido e ufficialmente registrato.

- ✅ **Confronto codice fiscale e dati anagrafici**  
  Verifica se un codice fiscale corrisponde ai dati di una persona (_nome, cognome, data di nascita, comune di nascita, provincia, sesso_).

- ✅ **Verifica di una partita IVA**  
  Controlla la validità di una partita IVA e ottieni informazioni sull’azienda.

Le API sono pensate **per sviluppatori** e offrono un’**integrazione facile** nei tuoi progetti grazie a un’architettura REST.

## 🔑 Autenticazione

Per utilizzare le API è necessario un **API Key**, che puoi ottenere registrandoti su [codicefiscale.dev](https://dashboard.codicefiscale.dev) e creando un account.

Le richieste devono includere l’API Key nell’header:

```http
Authorization: Bearer {API_KEY}
```

Esempio di chiamata con **cURL**:

```sh
curl -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Accept: application/json" \
     https://api.codicefiscale.dev/api/v1/verifica/codice-fiscale/RSSMRA80A01H501Z
```

## 💳 Sistema di Crediti e Piani

Le API funzionano con un sistema a **crediti**:  
📌 **1 chiamata API = 1 credito**

Puoi acquistare crediti o sottoscrivere un abbonamento mensile scegliendo tra:

- 🔹 **Pay Per Use** → Acquisto di crediti senza abbonamenti.
- 🔹 **Basic** → Include crediti mensili e offre sconti sull’acquisto di crediti extra.
- 🔹 **Business** → Perfetto per grandi volumi, con più crediti e sconti maggiori.

➡️ **Acquista crediti o un abbonamento** nello [Store](https://dashboard.codicefiscale.dev/store).

## 🎁 Crediti gratuiti ogni mese

Ogni mese puoi ottenere **crediti gratuiti** verificando i tuoi dati nel nostro Store.  
Per motivi di sicurezza e privacy, **non salviamo i tuoi dati personali**, ma solo un **hash anonimo** per prevenire multi-account.
