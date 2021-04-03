import API from '../src/API';

export const employees = []; 
API.search()
        .then((res) => {
            console.log(res);
            employees.push({
                employees: res.data.results.map((e, i) => ({
                title: e.name.title,
                firstName: e.name.first,
                lastName: e.name.last,
                email: e.email,
                phone: e.phone,
                picture: e.picture.medium,
                key: i,
                })),
            });
            console.log(employees);
        })
        .catch((err) => console.log(err));

