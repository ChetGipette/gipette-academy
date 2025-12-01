import chetAssist from "/assets/chetFlex.png";
import chetAvatar from "/assets/chet3d.png";

export default function ChetAvatar({ type }: { type: "avatar" | "assist" }) {
  if (type === "assist") {
    return (
      <div className="object-cover rounded-2xl shadow-xl mb-10 bg-white">
        <h1 className="p-2 text-2xl font-bold text-blue-700 text-center">
          Introducing Chet Assist
        </h1>
        <p className="pt-0 p-2 text-gray-600 text-center">
          Spend Chet Coins to unlock Chet Assist and receive helpful hints from
          Chet
        </p>
        <img
          src={chetAssist}
          alt="Chet Gipette"
          className="w-40 mx-auto mb-6 rounded-xl"
        />
      </div>
    );
  }
  return (
    <div className="object-cover rounded-2xl shadow-xl mb-10 bg-white">
      <h1 className="p-2 text-2xl font-bold text-blue-700 text-center">
        Introducing all-new Chet Avatar
      </h1>
      <p className="pt-0 p-2 text-gray-600 text-center">
        Subscribe to Chet 3.0+ to unlock Chet Avatar, the friendly, digitally
        generated human tutor who remembers your name, learning needs, and
        purchase history!
      </p>
      <img
        src={chetAvatar}
        alt="Chet Gipette"
        className="w-40 mx-auto mb-6 rounded-xl"
      />
    </div>
  );
}
