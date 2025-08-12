import { User as AuthUser } from "lucia";

type Entity = {
    userId: string | null;
}

export const isOwner = (AuthUser: AuthUser | null | undefined, entity: Entity | null | undefined) => {
    if(!AuthUser || !entity) {
        return false;
    }
    
    if(!entity.userId) {
        return false;
    }
    if (entity.userId !== AuthUser.id) {
        return false;
    } else {
        return true;
    }
}