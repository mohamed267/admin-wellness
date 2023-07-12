import { Client, ClientResponse } from '../types';

export const extractClients = (clientRespose: ClientResponse[]): Client[] => {
  let id = 0;
  return (
    clientRespose?.map((client: ClientResponse) => {
      id = id + 1;
      return {
        id: `id${id}`,
        fullName: client?.fullName ?? '',
        subscriptionDate: client?.subscriptionDate ?? '',
        phoneNumber: client?.phoneNumber ?? '',
        score: client?.score ?? 0,
        tickets: client?.tickets ?? 0,
      };
    }) ?? []
  );
};
