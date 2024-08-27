import localFont from "next/font/local";
const Agrandir = localFont({
  src: [
    { path: "./Agrandir-Regular.otf", weight: "400" },
    { path: "./Agrandir-TextBold.otf", weight: "500" },
    { path: "./Agrandir-GrandHeavy.otf", weight: "700" },
  ],
  variable: "--font-agrandir",
});

export default Agrandir;
