import eatta from '../tea/EATTA.png';
import tbk from '../tea/tbk.png';

export default function Hyperlink () {
    return (
         <div className="associates">
      <a href="https://eatta.co.ke/"
      target="_blank"
      rel="noopener noreferrer">
        <img src={eatta}
        alt="EATTA"
        className="eatta"
        title="East African Tea Trade Association"/>
      </a>
      <a href="https://www.teaboard.or.ke/"
      target="_blank"
      rel="noopener noreferrer">
        <img src={tbk}
        alt="Tea Board of Kenya"
        className="tbk"
        title="Tea Board of Kenya" />
      </a>
    </div>
    );
}