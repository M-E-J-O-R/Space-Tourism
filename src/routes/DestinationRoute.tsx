import { Route, Routes } from "react-router-dom";

import Destination from "../pages/Destination";

const DestinationRoute = () => {
    return ( 
        <>
            {/* element={<Destination />} */}
            <Routes>
                <Route   >
                    <Route index element={<Destination />} />
                    <Route path=":id" element={<Destination/>} />

                </Route>
                
            </Routes>
        </>
     );
}
 
export default DestinationRoute;