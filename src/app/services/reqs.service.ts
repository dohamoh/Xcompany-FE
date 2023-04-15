import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReqsService {
  private baseUrl = 'http://localhost:3000';
  constructor(private HttpClient: HttpClient) {}
  // services
  addServices(data: any): any {
    return this.HttpClient.post(`${this.baseUrl}/services/addServices`, data);
  }
  getAllServices(): any {
    return this.HttpClient.get(`${this.baseUrl}/services/getAllServices`);
  }
  editServices(data: any): any {
    return this.HttpClient.put(`${this.baseUrl}/services/editServices`, data);
  }
  deleteService(id: any): any {
    return this.HttpClient.delete(
      `${this.baseUrl}/services/deleteService/${id}`
    );
  }

  // ----------_____________----------
  // register
  signUp(data: any): any {
    return this.HttpClient.post(`${this.baseUrl}/auth/signUp`, data);
  }
  logIn(data: any): any {
    return this.HttpClient.post(`${this.baseUrl}/auth/logIn`, data);
  }
  getUserRole(token: any): any {
    return this.HttpClient.get(`${this.baseUrl}/auth/getUserRole/${token}`);
  }
  // client

  addClient(data: any): any {
    return this.HttpClient.post(`${this.baseUrl}/client/addClient`, data);
  }

  // -------___________-------
  // clients
  getAllClients(): any {
    return this.HttpClient.get(`${this.baseUrl}/client/getAllClients`);
  }

  // -------___________-------

  // user
  addToCart(id: any): any {
    let data = {
      id,
    };
    return this.HttpClient.put(`${this.baseUrl}/user/addToCart`, data, {
      headers: {
        authorization: `Bearer__${localStorage.getItem('userToken')}`,
      },
    });
  }
  removeFromCart(id: any): any {
    let data = {
      id,
    };
    return this.HttpClient.put(`${this.baseUrl}/user/removeFromCart`, data, {
      headers: {
        authorization: `Bearer__${localStorage.getItem('userToken')}`,
      },
    });
  }
  clearCart(): any {
    let token = localStorage.getItem('userToken');
    return this.HttpClient.put(`${this.baseUrl}/user/clearCart`, token, {
      headers: {
        authorization: `Bearer__${localStorage.getItem('userToken')}`,
      },
    });
  }

  searchUser(data:any): any {
    return this.HttpClient.post(`${this.baseUrl}/user/searchUser`, data, {
      headers: {
        authorization: `Bearer__${localStorage.getItem('userToken')}`,
      },
    });
  }


addAdmin(data:any): any {
    return this.HttpClient.put(`${this.baseUrl}/user/addAdmin`, data, {
      headers: {
        authorization: `Bearer__${localStorage.getItem('userToken')}`,
      },
    });
  }
  addSuperAdmin(data:any): any {
    return this.HttpClient.put(`${this.baseUrl}/user/addSuperAdmin`, data, {
      headers: {
        authorization: `Bearer__${localStorage.getItem('userToken')}`,
      },
    });
  }
  removeAdmin(data:any): any {
    return this.HttpClient.put(`${this.baseUrl}/user/removeAdmin`, data, {
      headers: {
        authorization: `Bearer__${localStorage.getItem('userToken')}`,
      },
    });
  }

}

    // ----------_____________----------


    // -------___________-------
    // clients
<<<<<<< HEAD
    getAllClients(): any {
      return this.HttpClient.get(`${this.baseUrl}/client/getAllClients`);
    }
=======



>>>>>>> c63abd5a1ddf2fa0b8018a206f043aa9eff13223
        // -------___________-------

// user


// , {
//   headers: {
//     authorization: `Bearer_${localStorage.getItem('userToken')}`,
//   }
// }
