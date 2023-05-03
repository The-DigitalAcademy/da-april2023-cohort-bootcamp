-- Table: public.User

-- DROP TABLE IF EXISTS public."User";

CREATE TABLE IF NOT EXISTS public."User"
(
    "UserId" uuid NOT NULL,
    "Name" character varying COLLATE pg_catalog."default" NOT NULL,
    "Email" character varying COLLATE pg_catalog."default" NOT NULL,
    "Password" character varying COLLATE pg_catalog."default" NOT NULL,
    "DateCreated" date NOT NULL,
    "IsActive" boolean NOT NULL DEFAULT true,
    CONSTRAINT "User_pkey" PRIMARY KEY ("UserId")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."User"
    OWNER to postgres;