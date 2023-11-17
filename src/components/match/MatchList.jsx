import React, { useEffect, useState} from "react";
import '../../assets/css/MatchList.css'
const MatchList = ({ accessToken }) => {
    const [partidos, setPartidos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9000/api/v1/partidos', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const data = await response.json();
                setPartidos(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [accessToken]);


    return (
        <div>
            {partidos.map((partido) => (
                <div className="par" key={partido.id}>
                    <div className="local">
                        <img className="flag" src={partido.equipoLocal.bandera} alt="bandera"></img>
                        <p className="nombreLocal">{partido.equipoLocal.nombre}</p>
                    </div>

                    <div className="marcadorL">{partido.marcador.golesLocal}</div>

                    <div className="info">
                        <p className="fecha">{partido.fecha}</p>
                        <p className="estadio">Estadio: {partido.estadio}</p>
                    </div>

                    <div className="marcadorV">{partido.marcador.golesVisitante}</div>

                    <div className="visitante">
                        <img className="flag" src={partido.equipoVisitante.bandera} alt="bandera"></img>
                        <p className="nombreVisitante">{partido.equipoVisitante.nombre}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default MatchList;