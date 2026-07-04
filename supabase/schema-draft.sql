-- Draft only; review before applying.
create table profiles (id uuid primary key, display_name text, created_at timestamptz default now());
create table roles (profile_id uuid references profiles(id), role text check (role in ('student','parent','teacher','garden_coordinator','donor','admin','super_admin')));
create table schools (id uuid primary key, name text); create table classes (id uuid primary key, school_id uuid references schools(id));
create table gardens (id uuid primary key, name text); create table garden_sites (id uuid primary key, garden_id uuid references gardens(id));
create table species (id uuid primary key, scientific_name text, verification_status text); create table species_profiles (id uuid primary key, species_id uuid references species(id));
create table host_plants (id uuid primary key, name text); create table nectar_plants (id uuid primary key, name text);
create table observations (id uuid primary key, species_id uuid references species(id), moderated boolean default false);
create table lifecycle_logs (id uuid primary key, observation_id uuid references observations(id), stage text);
create table student_missions (id uuid primary key, profile_id uuid references profiles(id), status text); create table badges (id uuid primary key, name text);
create table releases (id uuid primary key, species_id uuid references species(id), approval_status text); create table media_uploads (id uuid primary key, private boolean default true);
create table donations (id uuid primary key, amount numeric); create table donor_reports (id uuid primary key, donation_id uuid references donations(id));
create table permit_documents (id uuid primary key, release_id uuid references releases(id)); create table partner_organizations (id uuid primary key, name text);
create table grant_pipeline (id uuid primary key, name text, stage text); create table content_pages (id uuid primary key, slug text); create table audit_logs (id uuid primary key, action text, created_at timestamptz default now());
