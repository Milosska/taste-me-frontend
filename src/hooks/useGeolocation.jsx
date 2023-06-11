import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [geoLocation, setGeolocation] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    getCurrentGeolocation();

    async function getCurrentGeolocation() {
      const currentPermission = await navigator.permissions.query({
        name: "geolocation",
      });

      if (currentPermission.state !== "granted") {
        return;
      }

      navigator.geolocation.getCurrentPosition(
        onNavigatorSuccess,
        onNavigatorError
      );

      function onNavigatorSuccess(pos) {
        const crd = pos.coords;
        setGeolocation(crd);
      }

      function onNavigatorError(err) {
        console.warn(`Navigation error:(${err.code}): ${err.message}`);
      }
    }
  }, []);

  return { geoLocation };
};
