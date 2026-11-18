// ═══════════════════════════════════════════════════════════════════════════
// SB Project — Standalone Interactive Demo Engine & Mock Database
// ═══════════════════════════════════════════════════════════════════════════

export type DemoRole = 'parent' | 'specialist' | 'beneficiary' | 'admin' | 'tutor'

export const DEMO_USERS: Record<DemoRole, any> = {
  parent: {
    id: 'demo-parent-1',
    email: 'fatima.alkhalifa@sbproject.bh',
    user_metadata: {
      role: 'parent',
      full_name: 'Fatima Al-Khalifa',
      theme_preference: 'parent',
    },
  },
  specialist: {
    id: 'demo-specialist-1',
    email: 'dr.sara@sbproject.bh',
    user_metadata: {
      role: 'specialist',
      full_name: 'Sara Al-Dosari',
    },
  },
  tutor: {
    id: 'demo-specialist-1',
    email: 'dr.sara@sbproject.bh',
    user_metadata: {
      role: 'specialist',
      full_name: 'Dr. Sara Al-Dosari',
    },
  },
  beneficiary: {
    id: 'demo-beneficiary-1',
    email: 'yusuf@sbproject.bh',
    user_metadata: {
      role: 'beneficiary',
      full_name: 'Yusuf Al-Khalifa',
    },
  },
  admin: {
    id: 'demo-admin-1',
    email: 'admin@sbproject.bh',
    user_metadata: {
      role: 'admin',
      full_name: 'Abdulla Al-Mannai',
    },
  },
}

// Helper for dates relative to today
function daysAgo(days: number): string {
  const d = new Date()
  d.setDate(d.getDate() - days)
  return d.toISOString()
}

function daysFromNowDateOnly(days: number): string {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}

// ─── Rich Initial Dataset ───────────────────────────────────────────────────
export const MOCK_DB: Record<string, any[]> = {
  profiles: [
    {
      id: 'demo-parent-1',
      role: 'parent',
      full_name: 'Fatima Al-Khalifa',
      email: 'fatima.alkhalifa@sbproject.bh',
      phone: '+973 3911 2233',
      created_at: daysAgo(45),
    },
    {
      id: 'demo-specialist-1',
      role: 'specialist',
      full_name: 'Sara Al-Dosari',
      email: 'dr.sara@sbproject.bh',
      phone: '+973 3844 5566',
      created_at: daysAgo(60),
    },
    {
      id: 'demo-specialist-2',
      role: 'tutor',
      full_name: 'Dr. Ahmed Al-Balooshi',
      email: 'ahmed.aba@sbproject.bh',
      phone: '+973 3677 8899',
      created_at: daysAgo(50),
    },
    {
      id: 'demo-specialist-3',
      role: 'tutor',
      full_name: 'Noora Al-Zayani',
      email: 'noora.ot@sbproject.bh',
      phone: '+973 3312 4567',
      created_at: daysAgo(35),
    },
    {
      id: 'demo-specialist-4',
      role: 'tutor',
      full_name: 'Khalid Al-Mahmood',
      email: 'khalid.sped@sbproject.bh',
      phone: '+973 3988 7766',
      created_at: daysAgo(28),
    },
    {
      id: 'demo-beneficiary-1',
      role: 'beneficiary',
      full_name: 'Yusuf Al-Khalifa',
      email: 'yusuf@sbproject.bh',
      created_at: daysAgo(40),
    },
    {
      id: 'demo-parent-2',
      role: 'parent',
      full_name: 'Mohammed Al-Zayani',
      email: 'm.alzayani@sbproject.bh',
      created_at: daysAgo(20),
    },
    {
      id: 'demo-parent-3',
      role: 'parent',
      full_name: 'Hessa Al-Gosaibi',
      email: 'hessa.g@sbproject.bh',
      created_at: daysAgo(12),
    },
    {
      id: 'demo-parent-4',
      role: 'parent',
      full_name: 'Salman Al-Arrayed',
      email: 'salman.a@sbproject.bh',
      created_at: daysAgo(5),
    },
    {
      id: 'demo-admin-1',
      role: 'admin',
      full_name: 'Abdulla Al-Mannai',
      email: 'admin@sbproject.bh',
      created_at: daysAgo(90),
    },
  ],

  parent_profiles: [
    {
      id: 'demo-parent-1',
      user_id: 'demo-parent-1',
      full_name: 'Fatima Al-Khalifa',
      created_at: daysAgo(45),
    },
    {
      id: 'demo-parent-2',
      user_id: 'demo-parent-2',
      full_name: 'Mohammed Al-Zayani',
      created_at: daysAgo(20),
    },
  ],

  beneficiaries: [
    {
      id: 'demo-beneficiary-1',
      parent_id: 'demo-parent-1',
      full_name: 'Yusuf Al-Khalifa',
      date_of_birth: '2017-04-15',
      gender: 'male',
      conditions: ['Autism Spectrum Disorder', 'ADHD'],
      communication_level: 'Verbal',
      literacy_level: 'Can read and write',
      independence_level: 'Moderate Support',
      support_needed: ['Speech Therapist', 'Behavioral Analyst (ABA)', 'Special Ed Teacher'],
      preferred_language: 'Arabic & English',
      learning_style: 'Visual & Interactive',
      notes: 'Loves astronomy, visual puzzles, and structured routines. Responds very well to positive reinforcement.',
      created_at: daysAgo(40),
    },
    {
      id: 'demo-beneficiary-2',
      parent_id: 'demo-parent-1',
      full_name: 'Mariam Al-Khalifa',
      date_of_birth: '2020-08-22',
      gender: 'female',
      conditions: ['Speech/Language Disorders', 'Learning Disabilities'],
      communication_level: 'Limited Verbal',
      literacy_level: 'Pre-literate',
      independence_level: 'Guided Support',
      support_needed: ['Speech Therapist', 'Occupational Therapist'],
      preferred_language: 'Arabic',
      learning_style: 'Kinesthetic & Play-based',
      notes: 'Enjoys sensory play, picture flashcards, and musical storytelling.',
      created_at: daysAgo(30),
    },
  ],

  students: [
    {
      id: 'demo-beneficiary-1',
      parent_id: 'demo-parent-1',
      full_name: 'Yusuf Al-Khalifa',
      age: 9,
      grade: 'Grade 4',
      school_name: "St. Christopher's School Bahrain",
      curriculum: 'British (IGCSE / National)',
      has_special_needs: true,
      special_needs: true,
      special_conditions: ['Autism_Spectrum', 'ADHD'],
      motivators: 'Space & astronomy stickers, interactive visual timers, logic puzzles',
      triggers: 'Sudden loud noises, unannounced schedule changes',
      communication_level: 'Verbal',
      learning_goal: 'Improve reading comprehension, sustain focus for 45-minute blocks, and strengthen social turn-taking skills.',
      created_at: daysAgo(40),
      parent: { full_name: 'Fatima Al-Khalifa' },
    },
    {
      id: 'demo-beneficiary-2',
      parent_id: 'demo-parent-1',
      full_name: 'Mariam Al-Khalifa',
      age: 6,
      grade: 'Grade 1',
      school_name: 'Bahrain Bayan School',
      curriculum: 'Bilingual / IB',
      has_special_needs: true,
      special_needs: true,
      special_conditions: ['Speech_Delay', 'Sensory_Processing'],
      motivators: 'Colorful flashcards, songs, gold star rewards',
      triggers: 'Long verbal-only instructions without visual cues',
      communication_level: 'Limited Verbal',
      learning_goal: 'Expand expressive Arabic & English vocabulary and improve phonetic articulation.',
      created_at: daysAgo(30),
      parent: { full_name: 'Fatima Al-Khalifa' },
    },
    {
      id: 'demo-student-3',
      parent_id: 'demo-parent-2',
      full_name: 'Ali Al-Zayani',
      age: 11,
      grade: 'Grade 6',
      school_name: 'Ibn Khuldoon National School',
      curriculum: 'American / IB',
      has_special_needs: true,
      special_needs: true,
      special_conditions: ['Dyslexia'],
      motivators: 'Audio stories, hands-on science experiments',
      triggers: 'Timed reading aloud in front of groups',
      communication_level: 'Verbal',
      learning_goal: 'Build phonemic decoding fluency and confidence in English writing.',
      created_at: daysAgo(18),
      parent: { full_name: 'Mohammed Al-Zayani' },
    },
  ],

  student_profiles: [
    {
      id: 'demo-beneficiary-1',
      parent_id: 'demo-parent-1',
      full_name: 'Yusuf Al-Khalifa',
      grade: 'Grade 4',
      curriculum: 'British Curriculum',
      special_needs: true,
      created_at: daysAgo(40),
      parent: { full_name: 'Fatima Al-Khalifa' },
    },
    {
      id: 'demo-beneficiary-2',
      parent_id: 'demo-parent-1',
      full_name: 'Mariam Al-Khalifa',
      grade: 'Grade 1',
      curriculum: 'Bilingual / IB',
      special_needs: true,
      created_at: daysAgo(30),
      parent: { full_name: 'Fatima Al-Khalifa' },
    },
    {
      id: 'demo-student-3',
      parent_id: 'demo-parent-2',
      full_name: 'Ali Al-Zayani',
      grade: 'Grade 6',
      curriculum: 'American / IB',
      special_needs: true,
      created_at: daysAgo(18),
      parent: { full_name: 'Mohammed Al-Zayani' },
    },
  ],

  student_learning_profiles: [
    {
      id: 'lp-1',
      student_id: 'demo-beneficiary-1',
      learning_style: 'visual',
      strong_subjects: ['Mathematics', 'Science', 'Computer Science', 'Art'],
      weak_subjects: ['English', 'History'],
      special_needs: 'Autism Spectrum Disorder (Level 1) & ADHD — benefits from visual schedules and 15-min milestone breaks.',
      preferred_session_length: 60,
      goals: ['Improve exam grades', 'Build confidence', 'Develop study skills', 'Master core concepts'],
      notes: 'Uses visual timer during sessions. Responds enthusiastically to space-themed examples.',
      risk_level: 'low',
      updated_at: daysAgo(3),
    },
    {
      id: 'lp-2',
      student_id: 'demo-beneficiary-2',
      learning_style: 'kinesthetic',
      strong_subjects: ['Art', 'Music'],
      weak_subjects: ['Arabic', 'English'],
      special_needs: 'Expressive speech delay — benefits from picture exchange cards and phonetic games.',
      preferred_session_length: 45,
      goals: ['Build confidence', 'Master core concepts'],
      notes: 'Keep activities play-based and under 15 minutes per segment.',
      risk_level: 'low',
      updated_at: daysAgo(5),
    },
  ],

  student_performance: [
    {
      id: 'perf-1',
      student_id: 'demo-beneficiary-1',
      subject: 'Speech & Social Communication',
      score: 92,
      engagement_level: 'high',
      recorded_at: daysAgo(2),
    },
    {
      id: 'perf-2',
      student_id: 'demo-beneficiary-1',
      subject: 'Mathematics (Visual Problem Solving)',
      score: 95,
      engagement_level: 'high',
      recorded_at: daysAgo(7),
    },
    {
      id: 'perf-3',
      student_id: 'demo-beneficiary-1',
      subject: 'Reading Comprehension & Focus',
      score: 86,
      engagement_level: 'high',
      recorded_at: daysAgo(14),
    },
    {
      id: 'perf-4',
      student_id: 'demo-beneficiary-1',
      subject: 'Behavioral Self-Regulation (ABA)',
      score: 89,
      engagement_level: 'high',
      recorded_at: daysAgo(21),
    },
    {
      id: 'perf-5',
      student_id: 'demo-beneficiary-2',
      subject: 'Phonetics & Vocabulary Building',
      score: 88,
      engagement_level: 'high',
      recorded_at: daysAgo(4),
    },
  ],

  specialist_profiles: [
    {
      id: 'demo-specialist-1',
      user_id: 'demo-specialist-1',
      full_name: 'Sara Al-Dosari',
      email: 'dr.sara@sbproject.bh',
      phone: '+973 3844 5566',
      bio: 'Senior Speech & Language Pathologist (Ph.D.) with 10+ years of clinical and educational experience supporting children with Autism, ADHD, and speech delays across Bahrain and the GCC.',
      specialties: ['Speech Therapist', 'Special Ed Teacher'],
      conditions_handled: ['Autism Spectrum Disorder', 'ADHD', 'Speech/Language Disorders', 'Learning Disabilities'],
      age_groups: ['Early Intervention (0-5)', 'School Age (6-12)', 'Teens (13-18)'],
      languages: ['Arabic', 'English', 'Sign Language'],
      session_types: ['Online', 'In-Person (Home)', 'In-Person (Center)'],
      price_per_hour: 25,
      rating: 4.9,
      total_sessions: 148,
      total_reviews: 64,
      verified: true,
      status: 'approved',
      created_at: daysAgo(60),
    },
    {
      id: 'demo-specialist-2',
      user_id: 'demo-specialist-2',
      full_name: 'Ahmed Al-Balooshi',
      email: 'ahmed.aba@sbproject.bh',
      phone: '+973 3677 8899',
      bio: 'Board Certified Behavior Analyst (BCBA) specializing in Applied Behavior Analysis (ABA), executive functioning for ADHD, and individualized IEP implementation.',
      specialties: ['Behavioral Analyst (ABA)', 'Psychologist'],
      conditions_handled: ['Autism Spectrum Disorder', 'ADHD', 'Intellectual Disability'],
      age_groups: ['School Age (6-12)', 'Teens (13-18)'],
      languages: ['Arabic', 'English'],
      session_types: ['Online', 'In-Person (Home)'],
      price_per_hour: 28,
      rating: 4.95,
      total_sessions: 210,
      total_reviews: 89,
      verified: true,
      status: 'approved',
      created_at: daysAgo(50),
    },
    {
      id: 'demo-specialist-3',
      user_id: 'demo-specialist-3',
      full_name: 'Noora Al-Zayani',
      email: 'noora.ot@sbproject.bh',
      phone: '+973 3312 4567',
      bio: 'Pediatric Occupational Therapist focused on sensory integration, fine motor skills development, and daily living independence for neurodivergent learners.',
      specialties: ['Occupational Therapist', 'Special Ed Teacher'],
      conditions_handled: ['Autism Spectrum Disorder', 'Down Syndrome', 'Multiple Disabilities', 'Learning Disabilities'],
      age_groups: ['Early Intervention (0-5)', 'School Age (6-12)'],
      languages: ['Arabic', 'English'],
      session_types: ['In-Person (Home)', 'In-Person (Center)'],
      price_per_hour: 22,
      rating: 4.85,
      total_sessions: 96,
      total_reviews: 42,
      verified: true,
      status: 'approved',
      created_at: daysAgo(35),
    },
    {
      id: 'demo-specialist-4',
      user_id: 'demo-specialist-4',
      full_name: 'Khalid Al-Mahmood',
      email: 'khalid.sped@sbproject.bh',
      phone: '+973 3988 7766',
      bio: 'Certified Special Education & STEM Specialist helping students with Dyslexia, Dyscalculia, and ADHD excel in British and American curricula.',
      specialties: ['Special Ed Teacher', 'Sign Language Interpreter'],
      conditions_handled: ['ADHD', 'Learning Disabilities', 'Speech/Language Disorders'],
      age_groups: ['School Age (6-12)', 'Teens (13-18)'],
      languages: ['Arabic', 'English', 'Sign Language'],
      session_types: ['Online', 'In-Person (Home)'],
      price_per_hour: 20,
      rating: 4.9,
      total_sessions: 134,
      total_reviews: 51,
      verified: true,
      status: 'approved',
      created_at: daysAgo(28),
    },
  ],

  specialist_applications: [
    {
      id: 'demo-specialist-1',
      user_id: 'demo-specialist-1',
      full_name: 'Sara Al-Dosari',
      email: 'dr.sara@sbproject.bh',
      phone: '+973 3844 5566',
      bio: 'Senior Speech & Language Pathologist (Ph.D.) with 10+ years of clinical and educational experience supporting children with Autism, ADHD, and speech delays across Bahrain and the GCC.',
      specialties: ['Speech Therapist', 'Special Ed Teacher'],
      conditions_handled: ['Autism Spectrum Disorder', 'ADHD', 'Speech/Language Disorders', 'Learning Disabilities'],
      age_groups: ['Early Intervention (0-5)', 'School Age (6-12)', 'Teens (13-18)'],
      languages: ['Arabic', 'English', 'Sign Language'],
      session_types: ['Online', 'In-Person (Home)', 'In-Person (Center)'],
      price_per_hour: 25,
      available_days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      available_time: 'Afternoon & Evening',
      status: 'approved',
      created_at: daysAgo(60),
    },
    {
      id: 'demo-specialist-2',
      user_id: 'demo-specialist-2',
      full_name: 'Ahmed Al-Balooshi',
      email: 'ahmed.aba@sbproject.bh',
      phone: '+973 3677 8899',
      bio: 'Board Certified Behavior Analyst (BCBA) specializing in Applied Behavior Analysis (ABA), executive functioning for ADHD, and individualized IEP implementation.',
      specialties: ['Behavioral Analyst (ABA)', 'Psychologist'],
      conditions_handled: ['Autism Spectrum Disorder', 'ADHD', 'Intellectual Disability'],
      age_groups: ['School Age (6-12)', 'Teens (13-18)'],
      languages: ['Arabic', 'English'],
      session_types: ['Online', 'In-Person (Home)'],
      price_per_hour: 28,
      available_days: ['Sunday', 'Monday', 'Wednesday', 'Thursday'],
      available_time: 'Afternoon',
      status: 'approved',
      created_at: daysAgo(50),
    },
    {
      id: 'demo-specialist-3',
      user_id: 'demo-specialist-3',
      full_name: 'Noora Al-Zayani',
      email: 'noora.ot@sbproject.bh',
      phone: '+973 3312 4567',
      bio: 'Pediatric Occupational Therapist focused on sensory integration, fine motor skills development, and daily living independence for neurodivergent learners.',
      specialties: ['Occupational Therapist', 'Special Ed Teacher'],
      conditions_handled: ['Autism Spectrum Disorder', 'Down Syndrome', 'Multiple Disabilities', 'Learning Disabilities'],
      age_groups: ['Early Intervention (0-5)', 'School Age (6-12)'],
      languages: ['Arabic', 'English'],
      session_types: ['In-Person (Home)', 'In-Person (Center)'],
      price_per_hour: 22,
      available_days: ['Sunday', 'Tuesday', 'Thursday', 'Saturday'],
      available_time: 'Morning & Afternoon',
      status: 'approved',
      created_at: daysAgo(35),
    },
    {
      id: 'demo-specialist-4',
      user_id: 'demo-specialist-4',
      full_name: 'Khalid Al-Mahmood',
      email: 'khalid.sped@sbproject.bh',
      phone: '+973 3988 7766',
      bio: 'Certified Special Education & STEM Specialist helping students with Dyslexia, Dyscalculia, and ADHD excel in British and American curricula.',
      specialties: ['Special Ed Teacher', 'Sign Language Interpreter'],
      conditions_handled: ['ADHD', 'Learning Disabilities', 'Speech/Language Disorders'],
      age_groups: ['School Age (6-12)', 'Teens (13-18)'],
      languages: ['Arabic', 'English', 'Sign Language'],
      session_types: ['Online', 'In-Person (Home)'],
      price_per_hour: 20,
      available_days: ['Monday', 'Tuesday', 'Wednesday', 'Saturday'],
      available_time: 'Evening',
      status: 'approved',
      created_at: daysAgo(28),
    },
  ],

  tutor_profiles: [
    {
      id: 'demo-specialist-1',
      user_id: 'demo-specialist-1',
      full_name: 'Dr. Sara Al-Dosari',
      avatar_url: null,
      bio: 'Senior Speech & Language Pathologist (Ph.D.) with 10+ years of clinical and educational experience supporting children with Autism, ADHD, and speech delays.',
      subjects: ['Speech Therapy', 'English', 'Arabic', 'Social Communication'],
      levels: ['Early Childhood', 'Primary (Grades 1-6)', 'Middle School'],
      curriculum: ['British', 'American', 'IB', 'Bahraini National'],
      languages: ['Arabic', 'English', 'Sign Language'],
      session_types: ['online', 'in-person'],
      teaching_methods: ['online', 'in-person', 'hybrid'],
      price_per_hour: 25,
      hourly_rate: 25,
      experience_years: 10,
      special_needs_trained: true,
      demo_video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      rating_average: 4.9,
      total_sessions: 148,
      total_reviews: 64,
      is_public: true,
      verification_status: 'verified',
      created_at: daysAgo(60),
    },
    {
      id: 'demo-specialist-2',
      user_id: 'demo-specialist-2',
      full_name: 'Dr. Ahmed Al-Balooshi',
      avatar_url: null,
      bio: 'Board Certified Behavior Analyst (BCBA) specializing in Applied Behavior Analysis (ABA), executive functioning for ADHD, and individualized IEP implementation.',
      subjects: ['Behavioral Therapy (ABA)', 'Executive Functioning', 'Mathematics', 'Science'],
      levels: ['Primary (Grades 1-6)', 'Middle School', 'High School'],
      curriculum: ['British', 'American', 'IB'],
      languages: ['Arabic', 'English'],
      session_types: ['online', 'in-person'],
      teaching_methods: ['online', 'in-person'],
      price_per_hour: 28,
      hourly_rate: 28,
      experience_years: 12,
      special_needs_trained: true,
      demo_video_url: null,
      rating_average: 5.0,
      total_sessions: 210,
      total_reviews: 89,
      is_public: true,
      verification_status: 'verified',
      created_at: daysAgo(50),
    },
    {
      id: 'demo-specialist-3',
      user_id: 'demo-specialist-3',
      full_name: 'Noora Al-Zayani',
      avatar_url: null,
      bio: 'Pediatric Occupational Therapist focused on sensory integration, fine motor skills development, and daily living independence for neurodivergent learners.',
      subjects: ['Occupational Therapy', 'Sensory Integration', 'Early Literacy', 'Art Therapy'],
      levels: ['Early Childhood', 'Primary (Grades 1-6)'],
      curriculum: ['British', 'Bahraini National', 'Montessori'],
      languages: ['Arabic', 'English'],
      session_types: ['in-person'],
      teaching_methods: ['in-person', 'hybrid'],
      price_per_hour: 22,
      hourly_rate: 22,
      experience_years: 7,
      special_needs_trained: true,
      demo_video_url: null,
      rating_average: 4.8,
      total_sessions: 96,
      total_reviews: 42,
      is_public: true,
      verification_status: 'verified',
      created_at: daysAgo(35),
    },
    {
      id: 'demo-specialist-4',
      user_id: 'demo-specialist-4',
      full_name: 'Khalid Al-Mahmood',
      avatar_url: null,
      bio: 'Certified Special Education & STEM Specialist helping students with Dyslexia, Dyscalculia, and ADHD excel in British and American curricula.',
      subjects: ['Mathematics', 'Science', 'Computer Science', 'Dyslexia Support'],
      levels: ['Primary (Grades 1-6)', 'Middle School', 'IGCSE / A-Level'],
      curriculum: ['British', 'American', 'IB'],
      languages: ['Arabic', 'English'],
      session_types: ['online', 'in-person'],
      teaching_methods: ['online', 'in-person'],
      price_per_hour: 20,
      hourly_rate: 20,
      experience_years: 8,
      special_needs_trained: true,
      demo_video_url: null,
      rating_average: 4.9,
      total_sessions: 134,
      total_reviews: 51,
      is_public: true,
      verification_status: 'verified',
      created_at: daysAgo(28),
    },
    {
      id: 'demo-pending-1',
      user_id: 'demo-pending-1',
      full_name: 'Dr. Layla Al-Hashimi',
      verification_status: 'pending',
      is_public: false,
      price_per_hour: 24,
      rating_average: 0,
      total_sessions: 0,
      total_reviews: 0,
      subjects: ['Clinical Psychology', 'Autism Assessment'],
      created_at: daysAgo(2),
    },
    {
      id: 'demo-pending-2',
      user_id: 'demo-pending-2',
      full_name: 'Tariq Al-Koheji',
      verification_status: 'pending',
      is_public: false,
      price_per_hour: 18,
      rating_average: 0,
      total_sessions: 0,
      total_reviews: 0,
      subjects: ['Special Needs Literacy', 'English'],
      created_at: daysAgo(1),
    },
  ],

  tutor_directory: [
    { tutor_profile_id: 'demo-specialist-1', full_name: 'Dr. Sara Al-Dosari' },
    { tutor_profile_id: 'demo-specialist-2', full_name: 'Dr. Ahmed Al-Balooshi' },
    { tutor_profile_id: 'demo-specialist-3', full_name: 'Noora Al-Zayani' },
    { tutor_profile_id: 'demo-specialist-4', full_name: 'Khalid Al-Mahmood' },
  ],

  tutor_applications: [
    {
      id: 'app-pending-1',
      user_id: 'demo-pending-1',
      full_name: 'Dr. Layla Al-Hashimi',
      email: 'layla.hashimi@clinical.bh',
      phone: '+973 3944 1122',
      bio: 'Licensed Educational Psychologist with 9 years experience in early autism diagnosis, cognitive behavioral interventions, and family counseling in Manama.',
      subjects: ['Educational Psychology', 'Autism Support', 'Behavioral Therapy'],
      levels: ['Early Childhood', 'Primary', 'Secondary'],
      curriculum: ['British', 'American', 'IB'],
      languages: ['Arabic', 'English'],
      session_types: ['Online', 'In-Person'],
      price_per_hour: 24,
      special_needs_trained: true,
      cv_url: 'layla-cv.pdf',
      certificate_url: 'nhra-license.pdf',
      demo_video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      available_days: ['Sunday', 'Monday', 'Tuesday', 'Thursday'],
      available_time: '3:00 PM - 8:00 PM',
      status: 'pending',
      created_at: daysAgo(2),
    },
    {
      id: 'app-pending-2',
      user_id: 'demo-pending-2',
      full_name: 'Tariq Al-Koheji',
      email: 'tariq.sped@edu.bh',
      phone: '+973 3366 9900',
      bio: 'Orton-Gillingham Certified Dyslexia & Literacy Specialist helping elementary and middle school students overcome reading and writing barriers.',
      subjects: ['English Literacy', 'Dyslexia Intervention', 'Study Skills'],
      levels: ['Primary', 'Middle School'],
      curriculum: ['British', 'Bahraini National'],
      languages: ['Arabic', 'English'],
      session_types: ['Online', 'In-Person'],
      price_per_hour: 18,
      special_needs_trained: true,
      cv_url: 'tariq-cv.pdf',
      certificate_url: 'og-cert.pdf',
      demo_video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      available_days: ['Monday', 'Wednesday', 'Saturday'],
      available_time: '4:00 PM - 9:00 PM',
      status: 'under_review',
      created_at: daysAgo(4),
    },
  ],

  bookings: [
    {
      id: 'booking-upcoming-1',
      parent_id: 'demo-parent-1',
      beneficiary_id: 'demo-beneficiary-1',
      student_id: 'demo-beneficiary-1',
      specialist_id: 'demo-specialist-1',
      tutor_id: 'demo-specialist-1',
      service_type: 'Speech & Social Communication Therapy',
      subject: 'Speech & Social Communication Therapy',
      date: daysFromNowDateOnly(2),
      time: '16:00',
      scheduled_at: daysFromNowDateOnly(2) + 'T16:00:00Z',
      duration_minutes: 60,
      session_type: 'online',
      status: 'accepted',
      price: 25,
      total_price: 25,
      paid: true,
      tutor_name: 'Dr. Sara Al-Dosari',
      student_name: 'Yusuf Al-Khalifa',
      meet_link: 'https://meet.google.com/sb-demo-session',
      meeting_link: 'https://meet.google.com/sb-demo-session',
      notes: 'Focus on conversational turn-taking and expressive storytelling using visual cards.',
      created_at: daysAgo(3),
      updated_at: daysAgo(2),
      beneficiary: { full_name: 'Yusuf Al-Khalifa' },
      specialist: { full_name: 'Dr. Sara Al-Dosari' },
      students: {
        id: 'demo-beneficiary-1',
        full_name: 'Yusuf Al-Khalifa',
        grade: 'Grade 4',
        school_name: "St. Christopher's School Bahrain",
        curriculum: 'British Curriculum',
      },
      student: { full_name: 'Yusuf Al-Khalifa' },
      session_notes: [],
    },
    {
      id: 'booking-upcoming-2',
      parent_id: 'demo-parent-1',
      beneficiary_id: 'demo-beneficiary-2',
      student_id: 'demo-beneficiary-2',
      specialist_id: 'demo-specialist-3',
      tutor_id: 'demo-specialist-3',
      service_type: 'Sensory Integration & Occupational Therapy',
      subject: 'Sensory Integration & Occupational Therapy',
      date: daysFromNowDateOnly(4),
      time: '17:30',
      scheduled_at: daysFromNowDateOnly(4) + 'T17:30:00Z',
      duration_minutes: 60,
      session_type: 'in-person',
      status: 'accepted',
      price: 22,
      total_price: 22,
      paid: true,
      tutor_name: 'Noora Al-Zayani',
      student_name: 'Mariam Al-Khalifa',
      notes: 'Fine motor grip exercises and tactile sensory play.',
      created_at: daysAgo(4),
      updated_at: daysAgo(3),
      beneficiary: { full_name: 'Mariam Al-Khalifa' },
      specialist: { full_name: 'Noora Al-Zayani' },
      students: {
        id: 'demo-beneficiary-2',
        full_name: 'Mariam Al-Khalifa',
        grade: 'Grade 1',
        school_name: 'Bahrain Bayan School',
        curriculum: 'Bilingual / IB',
      },
      student: { full_name: 'Mariam Al-Khalifa' },
      session_notes: [],
    },
    {
      id: 'booking-pending-1',
      parent_id: 'demo-parent-1',
      beneficiary_id: 'demo-beneficiary-1',
      student_id: 'demo-beneficiary-1',
      specialist_id: 'demo-specialist-1',
      tutor_id: 'demo-specialist-1',
      service_type: 'ABA Executive Functioning & Focus Coaching',
      subject: 'ABA Executive Functioning & Focus Coaching',
      date: daysFromNowDateOnly(6),
      time: '15:00',
      scheduled_at: daysFromNowDateOnly(6) + 'T15:00:00Z',
      duration_minutes: 60,
      session_type: 'online',
      status: 'pending',
      price: 25,
      total_price: 25,
      paid: true,
      tutor_name: 'Dr. Sara Al-Dosari',
      student_name: 'Yusuf Al-Khalifa',
      notes: 'Weekly check-in on IEP communication milestones.',
      created_at: daysAgo(1),
      updated_at: daysAgo(1),
      beneficiary: { full_name: 'Yusuf Al-Khalifa' },
      specialist: { full_name: 'Dr. Sara Al-Dosari' },
      students: {
        id: 'demo-beneficiary-1',
        full_name: 'Yusuf Al-Khalifa',
        grade: 'Grade 4',
        school_name: "St. Christopher's School Bahrain",
        curriculum: 'British Curriculum',
      },
      student: { full_name: 'Yusuf Al-Khalifa' },
      session_notes: [],
    },
    {
      id: 'booking-completed-1',
      parent_id: 'demo-parent-1',
      beneficiary_id: 'demo-beneficiary-1',
      student_id: 'demo-beneficiary-1',
      specialist_id: 'demo-specialist-1',
      tutor_id: 'demo-specialist-1',
      service_type: 'Speech Therapy',
      subject: 'Speech Therapy',
      date: daysAgo(5).split('T')[0],
      time: '16:00',
      scheduled_at: daysAgo(5),
      duration_minutes: 60,
      session_type: 'online',
      status: 'completed',
      price: 25,
      total_price: 25,
      paid: true,
      tutor_name: 'Dr. Sara Al-Dosari',
      student_name: 'Yusuf Al-Khalifa',
      created_at: daysAgo(7),
      updated_at: daysAgo(5),
      beneficiary: { full_name: 'Yusuf Al-Khalifa' },
      specialist: { full_name: 'Dr. Sara Al-Dosari' },
      students: {
        id: 'demo-beneficiary-1',
        full_name: 'Yusuf Al-Khalifa',
        grade: 'Grade 4',
        school_name: "St. Christopher's School Bahrain",
        curriculum: 'British Curriculum',
      },
      student: { full_name: 'Yusuf Al-Khalifa' },
      session_notes: [{ id: 'note-1' }],
    },
    {
      id: 'booking-completed-2',
      parent_id: 'demo-parent-1',
      beneficiary_id: 'demo-beneficiary-1',
      student_id: 'demo-beneficiary-1',
      specialist_id: 'demo-specialist-2',
      tutor_id: 'demo-specialist-2',
      service_type: 'Behavioral Therapy (ABA)',
      subject: 'Behavioral Therapy (ABA)',
      date: daysAgo(15).split('T')[0],
      time: '17:00',
      scheduled_at: daysAgo(15),
      duration_minutes: 60,
      session_type: 'in-person',
      status: 'completed',
      price: 28,
      total_price: 28,
      paid: true,
      tutor_name: 'Dr. Ahmed Al-Balooshi',
      student_name: 'Yusuf Al-Khalifa',
      created_at: daysAgo(18),
      updated_at: daysAgo(15),
      beneficiary: { full_name: 'Yusuf Al-Khalifa' },
      specialist: { full_name: 'Dr. Ahmed Al-Balooshi' },
      students: {
        id: 'demo-beneficiary-1',
        full_name: 'Yusuf Al-Khalifa',
        grade: 'Grade 4',
        school_name: "St. Christopher's School Bahrain",
        curriculum: 'British Curriculum',
      },
      student: { full_name: 'Yusuf Al-Khalifa' },
      session_notes: [{ id: 'note-2' }],
    },
    {
      id: 'booking-completed-3',
      parent_id: 'demo-parent-1',
      beneficiary_id: 'demo-beneficiary-2',
      student_id: 'demo-beneficiary-2',
      specialist_id: 'demo-specialist-1',
      tutor_id: 'demo-specialist-1',
      service_type: 'Occupational Therapy',
      subject: 'Occupational Therapy',
      date: daysAgo(35).split('T')[0],
      time: '15:30',
      scheduled_at: daysAgo(35),
      duration_minutes: 60,
      session_type: 'in-person',
      status: 'completed',
      price: 45,
      total_price: 45,
      paid: true,
      tutor_name: 'Dr. Sara Al-Dosari',
      student_name: 'Mariam Al-Khalifa',
      created_at: daysAgo(38),
      updated_at: daysAgo(35),
      beneficiary: { full_name: 'Mariam Al-Khalifa' },
      specialist: { full_name: 'Dr. Sara Al-Dosari' },
      students: {
        id: 'demo-beneficiary-2',
        full_name: 'Mariam Al-Khalifa',
        grade: 'Grade 1',
        school_name: 'Bahrain Bayan School',
        curriculum: 'Bilingual / IB',
      },
      student: { full_name: 'Mariam Al-Khalifa' },
      session_notes: [],
    },
    {
      id: 'booking-completed-4',
      parent_id: 'demo-parent-2',
      beneficiary_id: 'demo-student-3',
      student_id: 'demo-student-3',
      specialist_id: 'demo-specialist-4',
      tutor_id: 'demo-specialist-4',
      service_type: 'Special Ed Mathematics',
      subject: 'Special Ed Mathematics',
      date: daysAgo(65).split('T')[0],
      time: '18:00',
      scheduled_at: daysAgo(65),
      duration_minutes: 90,
      session_type: 'online',
      status: 'completed',
      price: 60,
      total_price: 60,
      paid: true,
      tutor_name: 'Khalid Al-Mahmood',
      student_name: 'Ali Al-Zayani',
      created_at: daysAgo(68),
      updated_at: daysAgo(65),
      beneficiary: { full_name: 'Ali Al-Zayani' },
      specialist: { full_name: 'Khalid Al-Mahmood' },
      students: {
        id: 'demo-student-3',
        full_name: 'Ali Al-Zayani',
        grade: 'Grade 6',
        school_name: 'Ibn Khuldoon National School',
        curriculum: 'American / IB',
      },
      student: { full_name: 'Ali Al-Zayani' },
      session_notes: [],
    },
    {
      id: 'booking-completed-5',
      parent_id: 'demo-parent-2',
      beneficiary_id: 'demo-student-3',
      student_id: 'demo-student-3',
      specialist_id: 'demo-specialist-1',
      tutor_id: 'demo-specialist-1',
      service_type: 'Dyslexia & Literacy Support',
      subject: 'Dyslexia & Literacy Support',
      date: daysAgo(95).split('T')[0],
      time: '16:30',
      scheduled_at: daysAgo(95),
      duration_minutes: 60,
      session_type: 'online',
      status: 'completed',
      price: 50,
      total_price: 50,
      paid: true,
      tutor_name: 'Dr. Sara Al-Dosari',
      student_name: 'Ali Al-Zayani',
      created_at: daysAgo(98),
      updated_at: daysAgo(95),
      beneficiary: { full_name: 'Ali Al-Zayani' },
      specialist: { full_name: 'Dr. Sara Al-Dosari' },
      students: {
        id: 'demo-student-3',
        full_name: 'Ali Al-Zayani',
        grade: 'Grade 6',
        school_name: 'Ibn Khuldoon National School',
        curriculum: 'American / IB',
      },
      student: { full_name: 'Ali Al-Zayani' },
      session_notes: [],
    },
  ],

  progress_reports: [
    {
      id: 'report-1',
      parent_id: 'demo-parent-1',
      student_id: 'demo-beneficiary-1',
      beneficiary_id: 'demo-beneficiary-1',
      tutor_id: 'demo-specialist-1',
      specialist_id: 'demo-specialist-1',
      performance_trend: 'Excellent',
      skill_area: 'Expressive Language & Social Pragmatics',
      score: 92,
      content:
        'Yusuf has made remarkable progress over the past 4 weeks! He now initiates two-way conversations using 4-5 word sentences without prompting and transitions smoothly between visual activities using his countdown timer. His focus duration during reading comprehension has increased from 15 minutes to 40 minutes.',
      created_at: daysAgo(3),
      students: { full_name: 'Yusuf Al-Khalifa' },
    },
    {
      id: 'report-2',
      parent_id: 'demo-parent-1',
      student_id: 'demo-beneficiary-2',
      beneficiary_id: 'demo-beneficiary-2',
      tutor_id: 'demo-specialist-3',
      specialist_id: 'demo-specialist-3',
      performance_trend: 'Improving',
      skill_area: 'Phonetic Articulation & Sensory Motor Integration',
      score: 88,
      content:
        'Mariam responded wonderfully to play-based phonetic flashcards this month. She mastered 18 new bilingual action words and demonstrated much stronger pencil grip control during tracing activities.',
      created_at: daysAgo(8),
      students: { full_name: 'Mariam Al-Khalifa' },
    },
  ],

  session_notes: [
    {
      id: 'note-1',
      booking_id: 'booking-completed-1',
      student_id: 'demo-beneficiary-1',
      tutor_id: 'demo-specialist-1',
      summary:
        'Completed 60-minute Speech & Social Communication session focusing on narrative sequencing ("First, Next, Last") and emotion recognition cards.',
      strengths:
        'High engagement with space-themed story cards; accurately sequenced 5 out of 5 story panels independently.',
      weaknesses:
        'Occasional hesitation when answering open-ended "Why" questions about character feelings.',
      homework:
        'Practice the 3-step bedtime story retelling sheet (10 mins daily) and reward with a gold star sticker.',
      recommendations:
        'Continue using visual emotion thermometers before reading comprehension tasks.',
      created_at: daysAgo(5),
      students: { full_name: 'Yusuf Al-Khalifa' },
      bookings: { subject: 'Speech & Social Communication Therapy', date: daysAgo(5).split('T')[0] },
    },
    {
      id: 'note-2',
      booking_id: 'booking-completed-2',
      student_id: 'demo-beneficiary-1',
      tutor_id: 'demo-specialist-2',
      summary:
        'ABA Executive Functioning session focusing on task initiation, visual chunking of math word problems, and self-monitoring checklists.',
      strengths:
        'Completed all 4 math mission blocks using the visual Pomodoro timer with zero frustration episodes.',
      weaknesses:
        'Needs a 2-minute movement break after 25 minutes of continuous desk work.',
      homework:
        'Use the "Mission Checklist" board for daily afternoon homework routines.',
      recommendations:
        'Maintain consistent visual schedule transitions between school and home study.',
      created_at: daysAgo(15),
      students: { full_name: 'Yusuf Al-Khalifa' },
      bookings: { subject: 'Behavioral Therapy (ABA)', date: daysAgo(15).split('T')[0] },
    },
  ],

  assignments: [
    {
      id: 'asgn-1',
      student_id: 'demo-beneficiary-1',
      tutor_id: 'demo-specialist-1',
      title: 'Space Explorer Story Sequencing (3-Step Visual Cards)',
      description:
        'Arrange the 4 illustrated space mission cards in order and tell Mom or Dad what happens in each picture using "First, Next, Then, Finally".',
      due_date: daysFromNowDateOnly(3),
      status: 'pending',
      tutor_feedback: null,
      created_at: daysAgo(2),
      students: { full_name: 'Yusuf Al-Khalifa' },
    },
    {
      id: 'asgn-2',
      student_id: 'demo-beneficiary-1',
      tutor_id: 'demo-specialist-2',
      title: 'Visual Fractions & Planet Math Puzzle',
      description:
        'Complete pages 4-5 of the visual fraction workbook using the color-coded blocks.',
      due_date: daysFromNowDateOnly(1),
      status: 'submitted',
      tutor_feedback: null,
      created_at: daysAgo(5),
      students: { full_name: 'Yusuf Al-Khalifa' },
    },
    {
      id: 'asgn-3',
      student_id: 'demo-beneficiary-2',
      tutor_id: 'demo-specialist-3',
      title: 'Sound & Picture Matching Flashcards (Arabic Letters)',
      description:
        'Match 10 animal flashcards with their starting sound and practice pronouncing each word 3 times.',
      due_date: daysAgo(3).split('T')[0],
      status: 'reviewed',
      tutor_feedback: 'Bravo Mariam! 🌟 Clear pronunciation on 9/10 words. Earned +50 bonus XP!',
      created_at: daysAgo(9),
      students: { full_name: 'Mariam Al-Khalifa' },
    },
  ],

  educational_games: [
    {
      id: 'game-1',
      title: 'Galaxy Math Ninja',
      description: 'Visual multiplication, addition, and pattern recognition adventure designed for neurodivergent learners.',
      subject: 'Mathematics',
      difficulty: 'easy',
      thumbnail_emoji: '🚀',
      grade_levels: ['Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'],
      game_url: 'https://www.pbskids.org/games/math',
      created_at: daysAgo(30),
    },
    {
      id: 'game-2',
      title: 'Emotion Detective & Social Stories',
      description: 'Interactive facial expression and social scenario game built for Autism & pragmatic communication support.',
      subject: 'Social Skills & Speech',
      difficulty: 'easy',
      thumbnail_emoji: '🎭',
      grade_levels: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'],
      game_url: 'https://www.pbskids.org/games/feelings',
      created_at: daysAgo(25),
    },
    {
      id: 'game-3',
      title: 'Phonics Treasure Island',
      description: 'Multi-sensory letter-sound matching game ideal for Dyslexia and early bilingual readers.',
      subject: 'English',
      difficulty: 'medium',
      thumbnail_emoji: '🏝️',
      grade_levels: ['KG', 'Grade 1', 'Grade 2', 'Grade 3'],
      game_url: 'https://www.starfall.com/h/',
      created_at: daysAgo(20),
    },
    {
      id: 'game-4',
      title: 'Focus Quest: Memory & Executive Function',
      description: 'Gamified working-memory and attention training puzzles tailored for students with ADHD.',
      subject: 'Cognitive Skills',
      difficulty: 'medium',
      thumbnail_emoji: '🧠',
      grade_levels: ['Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
      game_url: 'https://www.highlightskids.com/games',
      created_at: daysAgo(15),
    },
  ],

  learning_videos: [
    {
      id: 'vid-1',
      title: 'Visual Fractions & Number Sense Made Easy',
      description: 'Step-by-step animated visual guide to understanding fractions using everyday objects and color blocks.',
      subject: 'Mathematics',
      youtube_url: 'https://www.youtube.com/watch?v=n0FZhQ_GkKw',
      duration_mins: 8,
      grade_levels: ['Grade 3', 'Grade 4'],
      created_at: daysAgo(20),
    },
    {
      id: 'vid-2',
      title: 'Understanding Feelings & Social Cues for Kids',
      description: 'Engaging animated social story helping children recognize emotions, tone of voice, and friendly turn-taking.',
      subject: 'English',
      youtube_url: 'https://www.youtube.com/watch?v=jetoWelJJJk',
      duration_mins: 6,
      grade_levels: ['Grade 1', 'Grade 2', 'Grade 3'],
      created_at: daysAgo(16),
    },
    {
      id: 'vid-3',
      title: 'Solar System & Space Exploration for Visual Learners',
      description: 'High-contrast, calm-narrated tour of the planets designed to spark curiosity in science.',
      subject: 'Science',
      youtube_url: 'https://www.youtube.com/watch?v=libKVRa01L8',
      duration_mins: 10,
      grade_levels: ['Grade 3', 'Grade 4', 'Grade 5'],
      created_at: daysAgo(12),
    },
    {
      id: 'vid-4',
      title: 'Phonics & Blending Sounds Multi-Sensory Lesson',
      description: 'Clear auditory and visual letter blending exercises to build reading fluency and confidence.',
      subject: 'English',
      youtube_url: 'https://www.youtube.com/watch?v=BELlZKpi1Zs',
      duration_mins: 7,
      grade_levels: ['KG', 'Grade 1', 'Grade 2'],
      created_at: daysAgo(7),
    },
  ],

  wallet_ledger: [
    {
      id: 'tx-1',
      user_id: 'demo-parent-1',
      transaction_type: 'debit',
      amount: 25.0,
      balance_after: 85.5,
      reason: 'Speech & Social Communication Session — Dr. Sara Al-Dosari',
      created_at: daysAgo(3),
      user: { full_name: 'Fatima Al-Khalifa', role: 'parent', email: 'fatima.alkhalifa@sbproject.bh' },
    },
    {
      id: 'tx-2',
      user_id: 'demo-parent-1',
      transaction_type: 'debit',
      amount: 22.0,
      balance_after: 110.5,
      reason: 'Occupational Therapy Session — Noora Al-Zayani',
      created_at: daysAgo(6),
      user: { full_name: 'Fatima Al-Khalifa', role: 'parent', email: 'fatima.alkhalifa@sbproject.bh' },
    },
    {
      id: 'tx-3',
      user_id: 'demo-parent-1',
      transaction_type: 'credit',
      amount: 100.0,
      balance_after: 132.5,
      reason: 'Wallet Top-Up via BenefitPay',
      created_at: daysAgo(10),
      user: { full_name: 'Fatima Al-Khalifa', role: 'parent', email: 'fatima.alkhalifa@sbproject.bh' },
    },
    {
      id: 'tx-4',
      user_id: 'demo-parent-1',
      transaction_type: 'debit',
      amount: 28.0,
      balance_after: 32.5,
      reason: 'Behavioral Therapy (ABA) Session — Dr. Ahmed Al-Balooshi',
      created_at: daysAgo(15),
      user: { full_name: 'Fatima Al-Khalifa', role: 'parent', email: 'fatima.alkhalifa@sbproject.bh' },
    },
    {
      id: 'tx-5',
      user_id: 'demo-parent-1',
      transaction_type: 'credit',
      amount: 60.5,
      balance_after: 60.5,
      reason: 'Initial Wallet Top-Up (Visa Card)',
      created_at: daysAgo(30),
      user: { full_name: 'Fatima Al-Khalifa', role: 'parent', email: 'fatima.alkhalifa@sbproject.bh' },
    },
  ],

  support_tickets: [
    {
      id: 'ticket-101',
      user_id: 'demo-parent-1',
      category: 'booking',
      message: 'Could we reschedule Thursday’s Speech Therapy session from 4:00 PM to 5:00 PM?',
      status: 'resolved',
      priority: 'normal',
      booking_id: 'booking-upcoming-1',
      created_at: daysAgo(4),
      user: { full_name: 'Fatima Al-Khalifa', email: 'fatima.alkhalifa@sbproject.bh' },
    },
    {
      id: 'ticket-102',
      user_id: 'demo-parent-2',
      category: 'payment',
      message: 'Requesting an official invoice PDF for our monthly IEP package for insurance reimbursement.',
      status: 'open',
      priority: 'payment',
      created_at: daysAgo(1),
      user: { full_name: 'Mohammed Al-Zayani', email: 'm.alzayani@sbproject.bh' },
    },
    {
      id: 'ticket-103',
      user_id: 'demo-parent-3',
      category: 'tutor',
      message: 'Looking for a certified ABA specialist available for home visits in Riffa on weekends.',
      status: 'in_progress',
      priority: 'urgent',
      created_at: daysAgo(2),
      user: { full_name: 'Hessa Al-Gosaibi', email: 'hessa.g@sbproject.bh' },
    },
  ],

  session_rewards: [
    {
      id: 'rew-1',
      booking_id: 'booking-upcoming-1',
      given_by: 'demo-specialist-1',
      reward_type: 'star',
      message: '⭐ Well done! Gold Star',
      created_at: daysAgo(0),
    },
    {
      id: 'rew-2',
      booking_id: 'booking-upcoming-1',
      given_by: 'demo-specialist-1',
      reward_type: 'badge_focus',
      message: '🎯 Well done! Focused!',
      created_at: daysAgo(0),
    },
    {
      id: 'rew-3',
      booking_id: 'booking-upcoming-1',
      given_by: 'demo-specialist-1',
      reward_type: 'badge_excellent',
      message: '🏆 Well done! Excellent!',
      created_at: daysAgo(0),
    },
  ],
}

// ─── Helper to resolve current Demo Role from URL or Cookie ────────────────
export function inferRoleFromPath(pathname?: string | null, fallbackCookieRole?: string | null): DemoRole {
  if (pathname) {
    if (pathname.startsWith('/dashboard/admin')) return 'admin'
    if (pathname.startsWith('/dashboard/specialist')) return 'specialist'
    if (pathname.startsWith('/dashboard/tutor')) return 'tutor'
    if (pathname.startsWith('/dashboard/beneficiary')) return 'beneficiary'
    if (pathname.startsWith('/dashboard/parent')) return 'parent'
  }
  if (
    fallbackCookieRole === 'admin' ||
    fallbackCookieRole === 'specialist' ||
    fallbackCookieRole === 'beneficiary' ||
    fallbackCookieRole === 'parent' ||
    fallbackCookieRole === 'tutor'
  ) {
    return fallbackCookieRole
  }
  return 'parent'
}

// ─── Chainable Mock Query Builder ──────────────────────────────────────────
class MockQueryBuilder {
  private table: string
  private rows: any[]
  private filters: Array<(row: any) => boolean> = []
  private sortCol: string | null = null
  private sortAsc: boolean = true
  private limitCount: number | null = null
  private isSingle: boolean = false
  private isMaybeSingle: boolean = false
  private countMode: boolean = false
  private headOnly: boolean = false
  private pendingMutation: (() => any) | null = null

  constructor(table: string) {
    this.table = table
    this.rows = MOCK_DB[table] ? [...MOCK_DB[table]] : []
  }

  select(_columns?: string, options?: { count?: string; head?: boolean }) {
    if (options?.count) this.countMode = true
    if (options?.head) this.headOnly = true
    return this
  }

  insert(payload: any | any[]) {
    this.pendingMutation = () => {
      const items = Array.isArray(payload) ? payload : [payload]
      const inserted = items.map((item, idx) => ({
        id: item.id || `${this.table}-${Date.now()}-${idx}`,
        created_at: item.created_at || new Date().toISOString(),
        ...item,
      }))
      if (!MOCK_DB[this.table]) MOCK_DB[this.table] = []
      MOCK_DB[this.table].unshift(...inserted)
      this.rows = inserted
      return inserted
    }
    return this
  }

  update(payload: any) {
    this.pendingMutation = () => {
      const tableData = MOCK_DB[this.table] || []
      const updated: any[] = []
      for (let i = 0; i < tableData.length; i++) {
        if (this.filters.every(fn => fn(tableData[i]))) {
          tableData[i] = { ...tableData[i], ...payload, updated_at: new Date().toISOString() }
          updated.push(tableData[i])
        }
      }
      this.rows = updated
      return updated
    }
    return this
  }

  upsert(payload: any | any[]) {
    return this.insert(payload)
  }

  delete() {
    this.pendingMutation = () => {
      const tableData = MOCK_DB[this.table] || []
      const remaining = tableData.filter(row => !this.filters.every(fn => fn(row)))
      MOCK_DB[this.table] = remaining
      this.rows = []
      return []
    }
    return this
  }

  eq(col: string, val: any) {
    this.filters.push(row => {
      if (row[col] === val) return true
      // Handle profile role equivalence between specialist and tutor in demo mode
      if (this.table === 'profiles' && col === 'role') {
        if ((val === 'tutor' || val === 'specialist') && (row.role === 'tutor' || row.role === 'specialist')) {
          return true
        }
      }
      return false
    })
    return this
  }

  neq(col: string, val: any) {
    this.filters.push(row => row[col] !== val)
    return this
  }

  in(col: string, vals: any[]) {
    this.filters.push(row => Array.isArray(vals) && vals.includes(row[col]))
    return this
  }

  not(col: string, op: string, val: any) {
    if (op === 'eq') {
      this.filters.push(row => row[col] !== val)
    }
    return this
  }

  ilike(col: string, pattern: string) {
    const clean = String(pattern).replace(/%/g, '').toLowerCase()
    this.filters.push(row => String(row[col] || '').toLowerCase().includes(clean))
    return this
  }

  contains(col: string, vals: any[]) {
    this.filters.push(row => {
      const arr = row[col]
      if (!Array.isArray(arr)) return false
      return vals.every(v =>
        arr.some((item: any) => String(item).toLowerCase().includes(String(v).toLowerCase()))
      )
    })
    return this
  }

  order(col: string, options?: { ascending?: boolean }) {
    this.sortCol = col
    this.sortAsc = options?.ascending ?? true
    return this
  }

  limit(n: number) {
    this.limitCount = n
    return this
  }

  single() {
    this.isSingle = true
    return this
  }

  maybeSingle() {
    this.isMaybeSingle = true
    return this
  }

  private execute() {
    if (this.pendingMutation) {
      const mutated = this.pendingMutation()
      if (this.isSingle || this.isMaybeSingle) {
        return { data: mutated[0] || null, error: null }
      }
      return { data: mutated, error: null }
    }

    let result = this.rows.filter(row => this.filters.every(fn => fn(row)))

    // Fallback for single record lookup by ID in demo mode so dynamic routes never 404
    if ((this.isSingle || this.isMaybeSingle) && result.length === 0 && this.rows.length > 0) {
      result = [this.rows[0]]
    }

    if (this.sortCol) {
      const col = this.sortCol
      const asc = this.sortAsc
      result.sort((a, b) => {
        const va = a[col] ?? ''
        const vb = b[col] ?? ''
        if (va < vb) return asc ? -1 : 1
        if (va > vb) return asc ? 1 : -1
        return 0
      })
    }

    const totalCount = result.length

    if (this.limitCount !== null) {
      result = result.slice(0, this.limitCount)
    }

    if (this.headOnly) {
      return { data: null, count: totalCount, error: null }
    }

    if (this.isSingle || this.isMaybeSingle) {
      return {
        data: result[0] || null,
        error: null,
        count: totalCount,
      }
    }

    return {
      data: result,
      error: null,
      count: totalCount,
    }
  }

  then<TResult1 = { data: any; error: any; count?: number }, TResult2 = never>(
    onfulfilled?: ((value: { data: any; error: any; count?: number }) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null
  ): Promise<TResult1 | TResult2> {
    try {
      const res = this.execute()
      return Promise.resolve(res).then(onfulfilled, onrejected)
    } catch (err) {
      return Promise.reject(err).then(onfulfilled, onrejected)
    }
  }
}

// ─── Mock Supabase Client Factory ──────────────────────────────────────────
export function createMockSupabaseClient(getActiveRole: () => DemoRole) {
  return {
    auth: {
      async getUser() {
        const role = getActiveRole()
        const user = DEMO_USERS[role] || DEMO_USERS.parent
        return { data: { user }, error: null }
      },
      async getSession() {
        const role = getActiveRole()
        const user = DEMO_USERS[role] || DEMO_USERS.parent
        return { data: { session: { user } }, error: null }
      },
      async signInWithPassword({ email }: { email: string; password?: string }) {
        let role: DemoRole = 'parent'
        const lower = (email || '').toLowerCase()
        if (lower.includes('admin')) role = 'admin'
        else if (lower.includes('spec') || lower.includes('tutor') || lower.includes('sara')) role = 'specialist'
        else if (lower.includes('ben') || lower.includes('hero') || lower.includes('yusuf')) role = 'beneficiary'
        if (typeof document !== 'undefined') {
          document.cookie = `sb_demo_role=${role}; path=/; max-age=86400`
        }
        return { data: { user: DEMO_USERS[role] }, error: null }
      },
      async signInWithOAuth() {
        return { data: { url: '/dashboard/parent' }, error: null }
      },
      async signUp({ email, options }: any) {
        const role: DemoRole = options?.data?.role || 'parent'
        return { data: { user: DEMO_USERS[role] || DEMO_USERS.parent }, error: null }
      },
      async updateUser(payload: any) {
        const role = getActiveRole()
        const user = DEMO_USERS[role] || DEMO_USERS.parent
        if (payload?.data) {
          user.user_metadata = { ...user.user_metadata, ...payload.data }
        }
        return { data: { user }, error: null }
      },
      async resetPasswordForEmail() {
        return { data: {}, error: null }
      },
      async signOut() {
        return { error: null }
      },
      onAuthStateChange(callback: any) {
        const role = getActiveRole()
        const user = DEMO_USERS[role] || DEMO_USERS.parent
        setTimeout(() => callback('SIGNED_IN', { user }), 0)
        return { data: { subscription: { unsubscribe: () => {} } } }
      },
    },
    from(table: string) {
      return new MockQueryBuilder(table)
    },
    async rpc(fnName: string, args?: any) {
      if (fnName === 'approve_tutor_application' && args?.p_application_id) {
        const apps = MOCK_DB.tutor_applications || []
        MOCK_DB.tutor_applications = apps.filter(a => a.id !== args.p_application_id)
      }
      return { data: true, error: null }
    },
    storage: {
      from(_bucket: string) {
        return {
          getPublicUrl(path: string) {
            return { data: { publicUrl: `/assets/logo/sb_logo_dark.png#${path}` } }
          },
          async upload(path: string) {
            return { data: { path }, error: null }
          },
        }
      },
    },
    channel(_name: string) {
      const ch = {
        on(_type: string, _filter: any, _cb: (payload: any) => void) {
          return ch
        },
        subscribe() {
          return ch
        },
      }
      return ch
    },
    removeChannel(_ch: any) {},
  }
}
