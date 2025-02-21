import Image from "next/image";

export default function Home() {
  return (
  <div className="grid items-center justify-items-center font-sf-display-pro">
    <main className="flex flex-col items-center">
        <Image
        src="../img/ipodTouch.ico"
        alt="apple ipod pixel art icon"
        priority
        />
        <ol className="">
        <li className="selectMenu">
          Select your destiny!
        <a href="https://nextcloud.blizzara.me">
        Nextcloud
        </a>
        </li>
        <li>
        <a href="https://navidrome.blizzara.me">
        Navidrome
        </a>
        </li>
        <li>
        <a href="https://jellyfin.blizzara.me">
        </a>
        </li>
        </ol>
      </main>
    </div>
  );
}
