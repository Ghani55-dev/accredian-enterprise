CREATE TABLE IF NOT EXISTS enterprise_leads (
  id BIGSERIAL PRIMARY KEY,
  full_name VARCHAR(80) NOT NULL,
  work_email VARCHAR(254) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  company VARCHAR(120) NOT NULL,
  job_title VARCHAR(100),
  team_size VARCHAR(20),
  training_requirement TEXT NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
