import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [imagesList, setImagesList] = useState([
        { id: 1, src: '/images/image1.jpg' },
        { id: 2, src: '/images/image2.jpeg' },
        { id: 3, src: '/images/image3.jpg' },
        { id: 4, src: '/images/image4.jpg' },
        { id: 5, src: '/images/image5.jpeg' },
        { id: 6, src: '/images/image6.jpg' },
    ]);

    const fileInput = useRef(null);

    const setActiveTabHandler = (tab) => {
        setActiveTab(tab);
    };

    const scrollImages = (direction) => {
        const container = document.getElementById('image-container');
        const scrollAmount = 300;

        container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    };

    const onAddImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImage = {
                    id: Date.now(),
                    src: reader.result
                };
                setImagesList(prevImagesList => [...prevImagesList, newImage]);
            };
            reader.readAsDataURL(file);
        }
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return <p className="content">
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br /><br />
                    I was born and raised in Albany, NY and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
                </p>;
            case 'experience':
                return <p className="content">
                    I have 5 years of experience in sales and have been working at Salesforce for the past 3 years. I've been able to close 50 deals in the past 6 months, and I'm looking forward to closing more deals in the future. I have a Bachelor's degree in Computer Science from the University of California, Berkeley. I've also...
                </p>;
            case 'recommended':
                return <p className="content">
                    I would recommend the following products to you based on your previous purchases:<br /><br />
                    <b>1. Salesforce CRM</b><br />
                    Salesforce CRM is a customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.<br /><br />
                    <b>2. HubSpot CRM</b><br />
                    HubSpot CRM is a free customer relationship management software that helps businesses manage their sales, marketing, and customer service.<br /><br />
                    <b>3. Zoho CRM</b><br />
                    Zoho CRM is a customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.<br />
                </p>;
            default:
                return null;
        }
    };

    return (
        <div className="app-container">
            <div className="section1">
                <div className="side-bar">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQdSURBVHgBlVXdThtHFJ5drCjKDcsTdPMEuE8Q5wEqiCr1Jqqw1YIgTepdqUBJiDyGFtUQ6nVIA6Vqbas/pL0BLqr0qpgnCLxAun2C2FGrwO6cM/3GKQivbUKOZGnH55zv/H1zxhLnSLW67Ygrl/KaOcOaXSbtCqE1EbdwPsD3TnT0764/lQv7YVg9gbeeusLWVa05o7UWzCwQpMnmpxln7eDsaCPQKaa6fURF3+8O1BWg/tsfeUBITewA7AXSfaiUqE3lbnQ4lzd/TtvM14jZI63fQdSWYpZz+Y8rfQNUf31aQErSZAXw4vjNESkuIMtr3xeY4Ifq0D45/9lUsStA9cnveS10mRS1tMXXJ27eOBBvIV+tbgwrzQ20b9DSOnd/9nb9NEB1a9slHniGrNGWgfTkh+8dJgHKa9WMtu1h1CZ0JA6n/VwjaSOXv0kLpmeopmnH+l0p/dA2ipitAjOZockkeHm96q6u1/d4wN4jzQEyDNimvaVg87ksr7sdAWY+OaA4LhLT4LEdl9sVrFe33YGUeI7e/T2Vff9qMquvH9f/Yq1dzKUBPu1QbGqgLNqdRqYhv4pMps2zPnNy5QVrco5bR0MpOI0qxRb6HyTBHzz6YQwscWFTm7nzUe6MqlIsrdVQ8RhdElmcO3xJxQHwpH0llbdZqxH0Xkex2E8GYKUzRKSRdT2p06R2ULUWxMNJXRRHdfgZm4wNvg/j0PInPuhiDVhxyBS3joUKk7qY9CCTshQGmtQFJRmaQZvqbQxkiJTqMjJy1x8PopeXr0p/Kjz5T8qyM7/4AOuDAvhiHqrSyxczwM0nN2VKwXoR/UTK3Gnw+S9W92KmDLIT5ioKtr3SwlzYy08pMutFpwwTYOmICwhsXbOLcGMDocRu6cuZRj9bVOiYNqVQZmi2peH02Vb0ElS7C/BwefFucJ7d+K3pNGxxaXUjFat4H7ctg2GMQVc8z7G08LknLiBY6BkQU6BLOzbZRwGZnjLn3+TozcqMNyNH32SHNubbs7Ve7drS95tEqsEo6d7iquzn5M8WR8CFP8GO7TvT96/1s8tOfIrNSi4rqtU2Nl7vIuuYc6BUC7MoTMvldC9HraIWs7KwbbWlepMiO34Ly46leZgsona7T9f1XKHkYShlo0SN11eW7nVdvNveHNrDzUdBqdELXLNlFqKDIN5PtW8rHQGMzMwvFdA/kwEGpOTD5YVzh94G9jyHX0Z4S0T7wTH+v9Q2ux+cE0Gv8+ihxLJyEMhs0kp8HO9/93ilo6Ls5KTLkT0GhDxmM6RZYZaiuPXjZgeFez76YIsbxxHeCM62n0/cSNDOPPgtfn0eBBeH/v82vGyQZeWe1DbCJFbPACcy6c26pBjs4VFsxmEsLwdgFkBDxAwN8D/icmWnFjT7YfwH/hsbTyeuFScAAAAASUVORK5CYII=" alt="vector"/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAfCAYAAAD9cg1AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFnSURBVHgB7VZBTsJAFP1/OprGmDjeoDcQbiALEzFKuoBzqCfwDB7BrUI0iMKO3gC8QY9QXBgM7f9O66ZAp20aYlz0JU2mv++/NzPJmym2r7pTRD8iwi8ZbTS/40dLTxHrK5V9r/H6f/f+fn0+7ON5tDEaHh23e84FnWhiLGTebGAk/Qy3ugI+T/N5mFg8YvP4/wwvNq99Vx8uW3XsMptlGCEhbLJzjFpxY+35tuAH0kTYkbj2J5zyZ8kpFfn+ykTfvFZAVKjy/n74zctKGEwwIbdR/wk4Xr+5p1WXcFkdIh0X9S1F4wISdVv2i5bfWohbdO/CguxF//i1KnWiXXb2LxbyHTk8JYjHHBscfJwB/RlIlGMM9mOWi7sPj8G1V68sMx+84i2o4pwpKowqBo8Dtp9ow6BiwHBvL5rLge4KgwL0btB5yU9FknvPxx7c5MfezwyHtOP9SaX1d+/0YO6EoNys3bQ0JZEK5XFlcn4sH/yow+7Sjy9ujzYAynj3evAAOGMD1Y1ZXyk/peuh7VukK5oMErMyP6eEL2yeNhm8SOBlfU1r3ePOtFps+jDAl7u75TtXJWxsPCwoWBbKGTqoihrY3B0a6Eo0WsSlZWtWs7n08MO6tLMbBd4wAKnGbpjqKzC+Qlg8y0fY20RmWsrZ7ECPH/jZ/wfPHDx5tudOgdjt2dD5W4xir9lZ84pjKDNVR5zMaaJh7qxTt0Vh8sZ0V8XrGq9u1eB2+nOPc1JhlEBwLJhBNb3A2+cAp9nRDrde/1eUp6v0U5bRvqmswzSVaAdCpYTp/a7lOb6zDRnA7XK8LYArXAptT95/6j8zpWiWvWOMu2GbQ2qMWdkwT9jnpz2XAwXZirZWNUQGASt9vZn0+8yy3Ik/ctS75F1nBkpR9OprXkH7/K0OkUryD0fv8t3G6/yqUr4d4eXbP/v39GT4YInl8Z0PPVnJS2BB0/W2HBNISMWjOL+8eTAHs7em2n17AnY6gII7p06jdK5pu3Tyl+n3Z9eLEeF4jHgkv7xwun0nvjZ/Zvsu13/vnKq3eAj4YrXXj9n2guRsSHw2Zt/3L63YrEBeL8Le+hkrCCPz/qk/2dOj6/fbJ7XabT5D99yBOMI2NkymhPxEKLRfGqq4k0k3xjXwpuEmZct8mB7jHytO/2APWXz30Sby2dG3CZzrqFSI1Pz6L9c9O8e7c37Aq2RaP6shzdrQsL7ZxZ2o77Atw4M13HE8v3Ai3dEO06NN8n2pshbGUGMquF6eZjZcxATVAtXSZ3a77TyJBRMI5GnxIQrto0QUrN4qa4/FCbEB5cA2bYLnXPkB8PjOC3prpGxQ+PLZQ9QjBZXIvNzHxlk9DO7U/jmT3AA7lo7bw6MA7h8pkO2NUPrk7m1GmPoDGJr2+XWj4iS/knDrHWzwzIb2FzmT9+4Jz1M1tzyKzS1t9ctcflT8urVfiZoB64DtfeTyr/d5vHu7QGzV2Yh97aXbQERAHmXXPj7Ydn5mdP75x9CqUE1GnJ9CEJ8Vb9Tx5XgfGR0vS/uv0/fdNnfjxqGqH4ijRZ/2pBzLV+tyrk4lW4biU3ySHKfaV0J9P8ALcAeZ9A8w5L5kpLFRco5oaFZzVJwW7SM0N+wtJ6ZXjSxCUsSVNQ=="/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB3SURBVHgB7VVBTsJAEI8d5xro8kU5KVh0BaBllDD05wR0KDdS0AvLBt8U6D5Bmg7yEkSE8K2eSoFR8Uy76L1NO+bc8K9z4fL8s3mIGt64V/Zt4jct/j9YOC1O7CyR8Xz+8JwKcrX3LGgVVRFqU/FpKzKDpjAR9FLf/QOr2z0ex0q1Q6+FzINW4g4oADmL3B90i+WXYdOqKmltXvNrONHLLIT7c0hH/WJyxMhQxE3ocHklJrhI0eMOT+UBTzL0imvR9o+eV0RJ5aH/7uxxYf/WktMP+Q5V0pL4K1rTzO9qSw9sJr91txM5/0FZ3/hRe9t8+pf7M8eI9ONUS4uBfddeOvs4C6oP0+n1twa6AsXN68E0h63/h2MTKbOlFqUvmPpUq8SMEdlUzxDeOt3UmkVbRY2OovIt12wYMDhKEXCxS4KgLg/1a5u3pzr8cZglAN5bC6vHlYmCxnC9yNOn4dnQvKt7j8SRVVR8NsCkqYZ8IWQW9/U9+0J3Xk+c4ch9XwvhZn9fNcnOadfj8xC6w1xC0CH+xyNnx2hHfTy3ovkV2HYm46zwnkzjBB0uLz8FDsB6XnA4rsmhHDW4Wfgofn3Q4Hj1aN7Q3FMA48AcEzU/uqvP98Mm8NdQ03IfV0cKIGZbDHMIpfosZq1i3Fb5rGrvctgclI8g1sbxE8E3dOruIRwxAm3cgsRtFCqDDmfIlHSeDAs6v3Ko8XCTqSAxsTRHq5V1KP8ZOrVf+5HDG/tDIAH9MgAm3ic5nzh7RHzD8/1MIwROIIu3FaaFsTT9F+Y4L9/Wy4bZxDhvPGK8RHXxAfu+nmrUmwOllqnt3DckMUSgr/8kqkR7woE8/a9W44HqKdpPXOx2/NV0v7bD0OTxXAbJl65ZT2jsIDVrO5SeO61rW+h5UNwmhQy1FCsnM0S0xg8kB4tSezkkEZdOt2N/s5N1P2CpHIl9rLUQvTS9jhpHyujPQ1Rs2ElpejCR/K7MBkjVzquHYN58zkA6AKsRx72OWX4jfUqfbD9b6cFS6t5fv3CFVXhZQfzM5yFHEDd7sbm5G8LzL0iyu7yDR9trwGiYicRHQpP3R93Bbf3AVV4Ppe8I16Is7Eyfd6TO6tZ1pOtGZfbgYlUK7ArIs/PfXZYguuJ6jK65kp3YOaRVh6Z/oKWh9s/FDK7vwT5brkRAAAAAElFTkSuQmCC" alt="Image 1"/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB3SURBVHgB7VVBTsJAEI8d5xro8kU5KVh0BaBllDD05wR0KDdS0AvLBt8U6D5Bmg7yEkSE8K2eSoFR8Uy76L1NO+bc8K9z4fL8s3mIGt64V/Zt4jct/j9YOC1O7CyR8Xz+8JwKcrX3LGgVVRFqU/FpKzKDpjAR9FLf/QOr2z0ex0q1Q6+FzINW4g4oADmL3B90i+WXYdOqKmltXvNrONHLLIT7c0hH/WJyxMhQxE3ocHklJrhI0eMOT+UBTzL0imvR9o+eV0RJ5aH/7uxxYf/WktMP+Q5V0pL4K1rTzO9qSw9sJr91txM5/0FZ3/hRe9t8+pf7M8eI9ONUS4uBfddeOvs4C6oP0+n1twa6AsXN68E0h63/h2MTKbOlFqUvmPpUq8SMEdlUzxDeOt3UmkVbRY2OovIt12wYMDhKEXCxS4KgLg/1a5u3pzr8cZglAN5bC6vHlYmCxnC9yNOn4dnQvKt7j8SRVVR8NsCkqYZ8IWQW9/U9+0J3Xk+c4ch9XwvhZn9fNcnOadfj8xC6w1xC0CH+xyNnx2hHfTy3ovkV2HYm46zwnkzjBB0uLz8FDsB6XnA4rsmhHDW4Wfgofn3Q4Hj1aN7Q3FMA48AcEzU/uqvP98Mm8NdQ03IfV0cKIGZbDHMIpfosZq1i3Fb5rGrvctgclI8g1sbxE8E3dOruIRwxAm3cgsRtFCqDDmfIlHSeDAs6v3Ko8XCTqSAxsTRHq5V1KP8ZOrVf+5HDG/tDIAH9MgAm3ic5nzh7RHzD8/1MIwROIIu3FaaFsTT9F+Y4L9/Wy4bZxDhvPGK8RHXxAfu+nmrUmwOllqnt3DckMUSgr/8kqkR7woE8/a9W44HqKdpPXOx2/NV0v7bD0OTxXAbJl65ZT2jsIDVrO5SeO61rW+h5UNwmhQy1FCsnM0S0xg8kB4tSezkkEZdOt2N/s5N1P2CpHIl9rLUQvTS9jhpHyujPQ1Rs2ElpejCR/K7MBkjVzquHYN58zkA6AKsRx72OWX4jfUqfbD9b6cFS6t5fv3CFVXhZQfzM5yFHEDd7sbm5G8LzL0iyu7yDR9trwGiYicRHQpP3R93Bbf3AVV4Ppe8I16Is7Eyfd6TO6tZ1pOtGZfbgYlUK7ArIs/PfXZYguuJ6jK65kp3YOaRVh6Z/oKWh9s/FDK7vwT5brkRAAAAAElFTkSuQmCC" alt="Image 2"/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB3SURBVHgB7VVBTsJAEI8d5xro8kU5KVh0BaBllDD05wR0KDdS0AvLBt8U6D5Bmg7yEkSE8K2eSoFR8Uy76L1NO+bc8K9z4fL8s3mIGt64V/Zt4jct/j9YOC1O7CyR8Xz+8JwKcrX3LGgVVRFqU/FpKzKDpjAR9FLf/QOr2z0ex0q1Q6+FzINW4g4oADmL3B90i+WXYdOqKmltXvNrONHLLIT7c0hH/WJyxMhQxE3ocHklJrhI0eMOT+UBTzL0imvR9o+eV0RJ5aH/7uxxYf/WktMP+Q5V0pL4K1rTzO9qSw9sJr91txM5/0FZ3/hRe9t8+pf7M8eI9ONUS4uBfddeOvs4C6oP0+n1twa6AsXN68E0h63/h2MTKbOlFqUvmPpUq8SMEdlUzxDeOt3UmkVbRY2OovIt12wYMDhKEXCxS4KgLg/1a5u3pzr8cZglAN5bC6vHlYmCxnC9yNOn4dnQvKt7j8SRVVR8NsCkqYZ8IWQW9/U9+0J3Xk+c4ch9XwvhZn9fNcnOadfj8xC6w1xC0CH+xyNnx2hHfTy3ovkV2HYm46zwnkzjBB0uLz8FDsB6XnA4rsmhHDW4Wfgofn3Q4Hj1aN7Q3FMA48AcEzU/uqvP98Mm8NdQ03IfV0cKIGZbDHMIpfosZq1i3Fb5rGrvctgclI8g1sbxE8E3dOruIRwxAm3cgsRtFCqDDmfIlHSeDAs6v3Ko8XCTqSAxsTRHq5V1KP8ZOrVf+5HDG/tDIAH9MgAm3ic5nzh7RHzD8/1MIwROIIu3FaaFsTT9F+Y4L9/Wy4bZxDhvPGK8RHXxAfu+nmrUmwOllqnt3DckMUSgr/8kqkR7woE8/a9W44HqKdpPXOx2/NV0v7bD0OTxXAbJl65ZT2jsIDVrO5SeO61rW+h5UNwmhQy1FCsnM0S0xg8kB4tSezkkEZdOt2N/s5N1P2CpHIl9rLUQvTS9jhpHyujPQ1Rs2ElpejCR/K7MBkjVzquHYN58zkA6AKsRx72OWX4jfUqfbD9b6cFS6t5fv3CFVXhZQfzM5yFHEDd7sbm5G8LzL0iyu7yDR9trwGiYicRHQpP3R93Bbf3AVV4Ppe8I16Is7Eyfd6TO6tZ1pOtGZfbgYlUK7ArIs/PfXZYguuJ6jK65kp3YOaRVh6Z/oKWh9s/FDK7vwT5brkRAAAAAElFTkSuQmCC" alt="Image 3"/>
                </div>
            </div>
        </div>
    )
}


export default App