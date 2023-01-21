import { useState } from 'react';
import { Autocomplete, Button, TextField } from '@mui/material';
import './search.css';

function Search() {

    const company = [
        {
            id: 1,
            name: 'Expreso Demonte',
            locations: [
                { id: 1, name: 'Buenos Aires' },
                { id: 5, name: 'Chaco' },
                { id: 7, name: 'Córdoba' },
                { id: 8, name: 'Corrientes' },
                { id: 10, name: 'Formosa' },
                { id: 15, name: 'Misiones' },
                { id: 22, name: 'Santa Fe' },
            ],
            email: 'expresodemonte@expresodemonte.com',
            tel: '362-4xxxxx',
            web: 'expresodemonte.com',
        },
        {
            id: 1,
            name: 'Expreso Lider',
            locations: [
                { id: 1, name: 'Buenos Aires' },
                // { id: 5, name: 'Chaco' },
                { id: 7, name: 'Córdoba' },
                { id: 8, name: 'Corrientes' },
                { id: 10, name: 'Formosa' },
                { id: 15, name: 'Misiones' },
                { id: 22, name: 'Santa Fe' },
            ],
            email: 'expresolider@expresolider.com',
            tel: '362-4xxxxx',
            web: 'expresolider.com',
        },
    ]

    const states = [
        { id: 1, name: 'Buenos Aires' },
        { id: 2, name: 'Buenos Aires-GBA' },
        { id: 3, name: 'Capital Federal' },
        { id: 4, name: 'Catamarca' },
        { id: 5, name: 'Chaco' },
        { id: 6, name: 'Chubut' },
        { id: 7, name: 'Córdoba' },
        { id: 8, name: 'Corrientes' },
        { id: 9, name: 'Entre Ríos' },
        { id: 10, name: 'Formosa' },
        { id: 11, name: 'Jujuy' },
        { id: 12, name: 'La Pampa' },
        { id: 13, name: 'La Rioja' },
        { id: 14, name: 'Mendoza' },
        { id: 15, name: 'Misiones' },
        { id: 16, name: 'Neuquén' },
        { id: 17, name: 'Río Negro' },
        { id: 18, name: 'Salta' },
        { id: 19, name: 'San Juan' },
        { id: 20, name: 'San Luis' },
        { id: 21, name: 'Santa Cruz' },
        { id: 22, name: 'Santa Fe' },
        { id: 23, name: 'Santiago del Estero' },
        { id: 24, name: 'Tierra del Fuego' },
        { id: 25, name: 'Tucumán' }
    ];

    const [data, setData] = useState({
        from: '',
        to: ''
    });

    const [result, setResult] = useState([]);

    const enviarDatos = (event) => {
        event.preventDefault()
        const destination = data.from.name;
        const origin = data.to.name;

        function findCompanies(array, destination, origin) {
            return array.filter((company) => {
                return company.locations.some((location) => location.name === destination) && company.locations.some(location => location.name === origin);
            });

        }
        setResult(findCompanies(company, destination, origin));
    }

    return (
        <div className='search-container'>
            <form onSubmit={enviarDatos}>
                <div className='search-form'>
                    <div className='search-input'>
                        <Autocomplete
                            options={states}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, newValue) => setData({ ...data, from: newValue })}
                            renderInput={(params) => <TextField {...params} label='Origen' />}
                            sx={{ width: 300 }}
                            isOptionEqualToValue={(option, value) => option.value === value.value}
                            noOptionsText={'No hay opciones disponibles'}
                        />
                    </div>
                </div>

                <div className='search-form'>
                    <div className='search-input'>
                        <Autocomplete
                            options={states}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, newValue) => setData({ ...data, to: newValue })}
                            renderInput={(params) => <TextField {...params} label='Destino' />}
                            sx={{ width: 300 }}
                            isOptionEqualToValue={(option, value) => option.value === value.value}
                        />
                    </div>
                </div>

                <div className='search-form'>
                    <div className='search-button'>
                        <Button
                            variant='contained'
                            onClick={(e) => enviarDatos(e)}
                        >Buscar</Button>
                    </div>
                </div>
            </form>

            <div className='card-container'>
                {
                    result.map((results) => {
                        return (                            
                            <div className='card-item' key={results.name}>
                                <div className='card-title'>
                                    <div>
                                        <h2>{results.name}</h2>
                                    </div>
                                </div>
                                <div className='card-info'>
                                    <div>
                                        <h5>Email:</h5>
                                        <a>{results.email}</a>
                                    </div>
                                    <div>
                                        <h5>Telefono:</h5>
                                        <a>{results.tel}</a>
                                    </div>
                                    <div>
                                        <h5>Pagina Web:</h5>
                                        <a>{results.web}</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>           

        </div>
    );
}

export default Search;