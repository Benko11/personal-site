import Avatar from "./assets/Benson-Dunwoody-Looking-Cool.png";
import { FactTableItem } from "./components/FactTable/FactTableItem";

function App() {
  return (
    <div className="bg-bluom-dark min-h-screen font-display text-bluom-light selection:bg-bluom-select flex flex-col items-center">
      <div className="w-[800px] max-w-[95%] pt-8 md:pt-36">
        <h1 className="font-bold text-3xl">benko11</h1>
        <div className="flex font-lg gap-16 leading-7 mt-4 flex-col md:flex-row">
          <div className="flex flex-col gap-8">
            <p>
              Hey there! My name is Benjamin, I am 25 years old, and I am a
              wanna-be artist, writer, web developer, UNIX enthusiast, but most
              importantly, I am me.
            </p>
            <p>
              I like creating unique experiences, retro terminals, messing with
              computers, listening to music, and I am trying hard to get myself
              to reading books, which I used to read a lot in the past, but
              those times are long gone, sadly.
            </p>
          </div>
          <img
            src={Avatar}
            alt=""
            className="w-full md:w-60 h-full md:ml-auto rounded"
          />
        </div>

        <table className="mt-12 table-auto w-full select-none">
          <colgroup>
            <col className="bg-bluom-select-tint" style={{}} />
            <col style={{}} />
          </colgroup>

          <tbody>
            <FactTableItem label="Gender">Non-binary</FactTableItem>
            <FactTableItem label="Pronouns">he/they</FactTableItem>
            <FactTableItem label="Favourite band">Radiohead</FactTableItem>
            <FactTableItem label="Favourite colour">Nebula Blue</FactTableItem>
            <FactTableItem label="Partner">fanoplanes</FactTableItem>
            <FactTableItem label="Languages">
              English, German, Spanish
            </FactTableItem>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
