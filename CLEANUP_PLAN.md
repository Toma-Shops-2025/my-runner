# Codebase Cleanup Plan

## Files to Remove (Unused Test/Debug Scripts)

### Test Scripts (No longer needed)
- `check-driver-stripe-status.js`
- `check-recent-orders.js`
- `check-storage.js`
- `check-stripe-mode.js`
- `clear_broken_data.js`
- `contact-drivers-for-onboarding.js`
- `create-test-order.js`
- `diagnose-documents.js`
- `setup-database.js`
- `test-documents.js`
- `test-payment-flow.js`

### Old SQL Files (Already Applied - Can Archive)
- `add_avatar_url_column.sql`
- `add_delivery_photos_table.sql`
- `add_onboarding_columns.sql`
- `add_stripe_columns.sql`
- `add_tip_columns.sql`
- `check_document_paths.sql`
- `COMPREHENSIVE_CLEANUP.sql`
- `comprehensive_fix.sql`
- `create_analytics_tables.sql`
- `create_avatars_bucket.sql`
- `create_document_expiration_tracking.sql`
- `create_driver_documents_table.sql`
- `create_driver_payment_tables.sql`
- `create_driver_training_tracking.sql`
- `create_earnings_table.sql`
- `create_error_monitoring_tables.sql`
- `create_missing_tables.sql`
- `create_order_queue_system.sql`
- `create_production_systems.sql`
- `create_storage_bucket_only.sql`
- `database_migration.sql`
- `fix_admin_profile_complete.sql`
- `fix_all_automation_rls.sql`
- `fix_automation_logs_rls.sql`
- `fix_avatars_policies.sql`
- `fix_critical_issues.sql`
- `fix_database_406_error.sql`
- `fix_document_view.sql`
- `fix_driver_applications_406_error.sql`
- `fix_driver_applications_simple.sql`
- `fix_driver_availability_sync.sql`
- `fix_earnings_table.sql`
- `fix_expiration_date_column.sql`
- `fix_marcia_offline_status.sql`
- `fix_missing_storage_files.sql`
- `fix_missing_tables_and_views.sql`
- `remove_test_order.sql`
- `setup_automation_tables.sql`
- `setup_driver_payments.sql`
- `setup_push_notifications.sql`
- `setup_storage_bucket.sql`
- `supabase_schema.sql`
- `update_admin_email.sql`
- `update_existing_documents_to_approved.sql`
- `update_user_to_admin.sql`

### Unused Components
- `src/components/AddressDebugInfo.tsx` (if not imported anywhere)

### Old Documentation (Keep for Reference, but Archive)
- `cleanup_debug_logs.md`
- `REVERT_PRICING_INSTRUCTIONS.txt`
- `ersT O M ADownloadsMyPartsRunner247 && git status -sb` (corrupted filename)

### VAPID Key Generators (Keep one, remove others)
- Keep: `generate-vapid-keys.cjs` (CommonJS version)
- Remove: `generate-vapid-keys.js` (ESM version - may have issues)

## Files to Keep (Important)

### Essential Documentation
- `README.md`
- `NETLIFY_ENV_VARS.md`
- `NOTIFICATIONS_AND_SCALABILITY.md`
- `POST_DEPLOYMENT_CHECKLIST.md`
- `TEST_PUSH_NOTIFICATIONS.md`
- `VAPID_KEYS_SETUP.md`

### Setup Guides (Keep for Reference)
- All `*_SETUP.md` files
- All `*_GUIDE.md` files
- All `*_CHECKLIST.md` files

## Action Plan

1. Create `archive/` folder for old SQL files
2. Remove test scripts
3. Remove unused components
4. Update .gitignore
5. Clean up unused imports in code

