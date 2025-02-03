import Image from "next/image";

interface Breed {
    name: string;
}

interface Cat {
    id: string;
    url: string;
    breeds: Breed[];
}

async function fetchCats(): Promise<Cat[]> {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10', {
            headers: {
                'x-api-key': process.env.NEXT_PUBLIC_THECATAPI_API_KEY || '',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Erro de requisição: ${response.status} - ${errorData?.message || response.statusText}`);
        }

        const cats: Cat[] = await response.json();
        return cats;
    }
        catch (error) {
            console.error('Erro ao buscar gatos!', error);
            return[];
        }
    }

    export default async function Documents() {
        const cats = await fetchCats();
      
        if (!cats || cats.length === 0) {
          return <div className="text-center text-red-500">Não foi possível carregar os gatinhos.</div>;
        }
      
        return (
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-4">Gatinhos fofinhos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cats.map((cat) => (
                <div key={cat.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={cat.url}
                      alt={cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].name : 'Gatinho'}
                      layout="fill"
                      objectFit="cover"
                      className="transition duration-500 ease-in-out transform hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-medium">{cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].name : 'Gatinho'}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }