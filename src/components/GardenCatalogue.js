import Plantations from '../components/Plantations';
import ImageList from '../components/ImageList';
import TeaLists from '../components/TeaLists';
import Factories from '../components/Factories';
import Maps from '../components/Maps';
import './Garden.css';

export default function GardenCatalogue () {
    return (
        <div className="garden">
            <h2>ATLAS GROUND LEVEL INSIGHTS</h2>
                      <div className="tea-plantations">
                <Plantations />
            </div>
            <div className="factory">
                <Factories />
            </div>
        
            <div className="maps">
                 <h3> Atlas Tea Gardens across East Africa</h3>
                <Maps/>       
            </div>
            <div className="logos">
            <ImageList />
        </div>
        <div className="lists">
            <TeaLists />
        </div>
            
        </div>
    );
}