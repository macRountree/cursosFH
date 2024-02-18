--On Delete On Update - Cascade

--

SELECT * FROM country WHERE code ='AFG';

SELECT * FROM city WHERE countrycode = 'AFG';

--queremos borrar el codigo AFG
-- El problema viene cuando querrramos BORRAR EL CODIGO afg EN country ... pero Si nuestras llaves foraneas Secundarias no estan en Cascade .. nos arrojara error ... 

