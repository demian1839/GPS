# GPS Speed Tracker

Ein einfacher GPS-Geschwindigkeitsmesser mit einer API, die das Tempolimit basierend auf GPS-Koordinaten abruft.

## 📌 Funktionen
- Zeigt die aktuelle Geschwindigkeit basierend auf GPS-Daten an.
- Fragt das Tempolimit von OpenStreetMap (Overpass API) ab.
- Warnt, wenn die Geschwindigkeit überschritten wird.
- Einfache Bereitstellung mit **Node.js** und **Express**.

## 🚀 Installation & Nutzung

### 1️⃣ Lokale Nutzung
#### **🔹 Voraussetzungen**
- **Node.js** installiert (https://nodejs.org)
- **Git** installiert (https://git-scm.com/)

#### **🔹 Projekt klonen und starten**
```sh
git clone https://github.com/dein-github-user/GPS_Speed_Tracker.git
cd GPS_Speed_Tracker
npm install
npm start
```
Dann öffne im Browser:
```
http://localhost:3000/speedlimit?lat=48.1351&lon=11.5820
```

### 2️⃣ Deployment auf GitHub Pages (Nur Frontend)
Falls du nur die Website auf GitHub Pages bereitstellen willst:
- Lade den Inhalt der `GPS_Speed_Tracker`-Ordner (ohne `server.js`) in dein GitHub-Repository hoch.
- Gehe in die **Repository-Einstellungen** → **GitHub Pages** aktivieren.
- Wähle als Quelle den `main`-Branch oder `/docs`.

### 3️⃣ Deployment mit Vercel (Backend + Frontend)
Falls du die komplette API hosten willst:
1. Installiere Vercel:
   ```sh
   npm install -g vercel
   ```
2. Starte die Bereitstellung:
   ```sh
   vercel
   ```
3. Folge den Anweisungen und kopiere den bereitgestellten Link in `script.js`.

## 📄 Lizenz
MIT-Lizenz
